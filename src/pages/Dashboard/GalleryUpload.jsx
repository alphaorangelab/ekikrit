import { message, Upload, Button, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { StyledGalleryUpload } from "./style";
import { dummyRequest } from "../../helper";
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
    setIsEdit,
    id,
}) => {
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // const { token } = userData;

    const [token, setToken] = useState("");

    useEffect(() => {
        const newToken = getToken();
        if (newToken) {
            setToken(newToken);
        }
    }, []);

    const { t } = useTranslation();

    const { Dragger } = Upload;
    const props = {
        name: "file",
        multiple: true,
        maxCount: 5,
        accept: "image/*",
        customRequest: dummyRequest,
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                const file = new FormData();
                console.log(info, "file at the gallery");
                file.append("files", info?.file?.originFileObj);
                console.log(info?.file, "here in the upload");
                fetch(`${baseApiUrl}/upload`, {
                    method: "POST",
                    headers: {
                        Authorization: token,
                    },
                    body: file,
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        const obj = {
                            imageUrl: data?.urls[0],
                            imageSize: info?.file?.size,
                            imageName: info?.file?.name,
                        };
                        console.log(data, "how many times do i called?");
                        setGalleryObj((prevGalleryObj) => ({
                            ...prevGalleryObj,
                            imageList: [...prevGalleryObj.imageList, obj],
                        }));
                        // Process the newly created user data
                        // localStorage.setItem("userData", JSON.stringify(newUserData));
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };
    console.log(galleryObj, "gallery object");
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
                    marginTop: "200px",
                }}
            >
                <Button
                    size="large"
                    style={{
                        width: "100px",
                        background: "#027d34",
                        color: "#ffffff",
                    }}
                    onClick={() => {
                        saveGallery({
                            gallery: galleryObj,
                            setOpenUploadGallery,
                            setGalleryObj,
                            setGalleryList,
                            galleryList,
                            token,
                        });
                    }}
                >
                    {isEdit ? t("Update") : t("Upload")}
                </Button>
            </div>
        </StyledGalleryUpload>
    );
};

export default GalleryUpload;
