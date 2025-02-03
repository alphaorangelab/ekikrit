import { message, Upload, Button, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { StyledGalleryUpload } from "./style";
import { useEffect, useState } from "react";
import { saveGallery, updateGallery } from "./api";
import { baseApiUrl } from "../../config";
import { useTranslation } from "react-i18next";
import { getToken } from "../../localStorage";

const GalleryUpload = ({
    setOpenUploadGallery,
    setGalleryList,
    galleryList,
    galleryObj,
    setGalleryObj,
    isEdit,
    updateGalleryList,
}) => {
    const [token, setToken] = useState("");
    const [imageList, setImageList] = useState([]);
    const [deletedImages, setDeletedImages] = useState([]); // Track deleted images

    useEffect(() => {
        const newToken = getToken();
        if (newToken) {
            setToken(newToken);
        }
    }, []);

    useEffect(() => {
        if (galleryObj?.imageList) {
            setImageList(
                galleryObj.imageList.map(
                    ({ imageUrl, imageSize, imageName, _id }) => ({
                        uid: _id,
                        url: imageUrl,
                        size: imageSize,
                        name: imageName,
                        status: "done",
                    })
                )
            );
        }
    }, [galleryObj?.imageList]);

    const { t } = useTranslation();
    const { Dragger } = Upload;

    // Custom request function for manual file handling
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 1000);
    };

    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append("files", file);

        try {
            const response = await fetch(`${baseApiUrl}/upload`, {
                method: "POST",
                headers: {
                    Authorization: token,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            if (data?.urls?.length) {
                const newImage = {
                    imageUrl: data.urls[0],
                    imageSize: file.size,
                    imageName: file.name,
                    _id: file.uid, // Ensure the new image has a unique ID
                };

                // Update the galleryObj state with the new image
                setGalleryObj((prev) => ({
                    ...prev,
                    imageList: [...(prev.imageList || []), newImage],
                }));

                return {
                    url: data.urls[0],
                    status: "done",
                    uid: file.uid,
                    name: file.name,
                };
            }
        } catch (error) {
            message.error(`${file.name} upload failed.`);
            return { status: "error", uid: file.uid };
        }
    };

    const handleDelete = (file) => {
        // Track the deleted images by their uid
        setDeletedImages((prev) => [...prev, file.uid]);
        // Remove the image from the imageList state
        setImageList((prev) => prev.filter((item) => item.uid !== file.uid));
        // Remove the image from the galleryObj state
        setGalleryObj((prev) => ({
            ...prev,
            imageList: prev.imageList.filter((item) => item._id !== file.uid),
        }));
    };

    const props = {
        name: "file",
        multiple: true,
        maxCount: 5,
        accept: "image/*",
        customRequest: async ({ file, onSuccess, onError }) => {
            const result = await handleUpload(file);
            if (result.status === "done") {
                onSuccess(result);
            } else {
                onError(new Error("Upload failed"));
            }
        },
        fileList: imageList,
        onChange(info) {
            let updatedFileList = info.fileList.map((file) => {
                if (file.response) {
                    return { ...file, status: "done" };
                }
                return file;
            });

            setImageList(updatedFileList);
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
        onRemove(file) {
            handleDelete(file);
        },
    };

    // Function to handle gallery save/update
    const handleSave = async () => {
        // Remove deleted images from the imageList before saving
        const updatedImageList = imageList.filter(
            (item) => !deletedImages.includes(item.uid)
        );

        const updatedGallery = {
            ...galleryObj,
            imageList: updatedImageList.map(({ url, size, name }) => ({
                imageUrl: url,
                imageSize: size,
                imageName: name,
            })),
        };

        if (isEdit) {
            // Call the updateGallery API and update the gallery list in the parent component
            await updateGallery({
                gallery: updatedGallery,
                setOpenUploadGallery,
                setGalleryObj,
                setGalleryList,
                galleryList,
                id: galleryObj?.id,
                token,
            });

            // Update the gallery list in parent component
            updateGalleryList(updatedGallery); // Update in parent list
        } else {
            // New gallery upload logic
            await saveGallery({
                gallery: updatedGallery,
                setOpenUploadGallery,
                setGalleryObj,
                setGalleryList,
                galleryList,
                token,
            });
        }
    };

    return (
        <StyledGalleryUpload>
            <h3>Title</h3>
            <Input
                size="large"
                onChange={(e) =>
                    setGalleryObj({ ...galleryObj, title: e.target.value })
                }
                value={galleryObj?.title}
            />
            <h3>Description</h3>
            <Input.TextArea
                onChange={(e) =>
                    setGalleryObj({
                        ...galleryObj,
                        description: e.target.value,
                    })
                }
                value={galleryObj?.description}
            />
            <h3>Upload Picture</h3>

            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                </p>
            </Dragger>

            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "20px",
                }}
            >
                <Button
                    size="large"
                    style={{
                        width: "100px",
                        background: "#027d34",
                        color: "#ffffff",
                    }}
                    onClick={handleSave}
                >
                    {isEdit ? t("Update") : t("Upload")}
                </Button>
            </div>
        </StyledGalleryUpload>
    );
};

export default GalleryUpload;
