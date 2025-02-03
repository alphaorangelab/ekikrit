import { Button, Modal, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import FloatingBtn from "../../components/FloatingBtn";
import GalleryUpload from "./GalleryUpload";
import { baseApiUrl } from "../../config";
import { getToken } from "../../localStorage";

const GalleryList = () => {
    const [galleryList, setGalleryList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openUploadGallery, setOpenUploadGallery] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [galleryObj, setGalleryObj] = useState({
        title: "",
        description: "",
        imageList: [],
    });
    const [token, setToken] = useState("");

    useEffect(() => {
        const newToken = getToken();
        if (newToken) {
            setToken(newToken);
        }
    }, []);

    const columns = [
        {
            title: "Title",
            render: (data) => <span>{data?.title}</span>,
        },
        {
            title: "Description",
            render: (data) => <span>{data?.description || "-"}</span>,
        },
        {
            title: "File",
            render: (data) => (
                <div style={{ display: "flex", gap: "5px" }}>
                    {data?.imageList && data?.imageList?.length > 0 ? (
                        <>
                            {data?.imageList.slice(0, 2).map((single) => (
                                <Tag
                                    key={single?._id}
                                    color="blue"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        padding: "5px",
                                    }}
                                >
                                    <img
                                        src={single?.imageUrl}
                                        height={20}
                                        width={20}
                                        alt="image"
                                    />
                                    {single?.imageName}
                                </Tag>
                            ))}
                            {data?.imageList?.length > 2 && (
                                <Tag
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        padding: "5px",
                                    }}
                                    color="blue"
                                >
                                    + {data?.imageList?.length - 1}
                                </Tag>
                            )}
                        </>
                    ) : (
                        <span>-</span>
                    )}
                </div>
            ),
        },
        {
            title: "Action",
            render: (data) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setIsEdit(true); // Enable editing
                            setSelectedId(data?._id);
                            setOpenUploadGallery(true); // Open upload modal
                        }}
                        type="primary"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenModal(true);
                            setSelectedId(data?._id);
                        }}
                        danger
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // Fetch gallery list on initial load
    useEffect(() => {
        fetch(`${baseApiUrl}/gallery`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => response.json())
            .then((data) => setGalleryList(data?.galleryList))
            .catch((error) => console.error("Error:", error));
    }, [token]);

    const deleteGallery = ({ id }) => {
        fetch(`${baseApiUrl}/gallery/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setOpenModal(false);
                setGalleryList(
                    galleryList.filter(
                        (item) => item._id !== data?.deletedGalleryItem?._id
                    )
                );
            })
            .catch((error) => console.error("Error:", error));
    };

    // Fetch gallery data for editing
    useEffect(() => {
        if (openUploadGallery && isEdit) {
            setLoading(true);
            fetch(`${baseApiUrl}/gallery/${selectedId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setGalleryObj({
                        id: selectedId,
                        title: data?.gallery?.title,
                        description: data?.gallery?.description,
                        imageList: data?.gallery?.imageList,
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.error("Error:", error);
                });
        }
    }, [openUploadGallery, isEdit, selectedId, token]);

    // Update the gallery in the list after editing
    const updateGalleryList = (updatedGallery) => {
        const updatedList = galleryList.map((item) =>
            item._id === updatedGallery._id ? updatedGallery : item
        );
        setGalleryList(updatedList);
    };

    return (
        <>
            <Table columns={columns} dataSource={galleryList} />
            <FloatingBtn
                tooltipTitle={"Upload Gallery"}
                onClick={() => {
                    setIsEdit(false); // Set to false for new gallery
                    setSelectedId(null);
                    setGalleryObj({
                        title: "",
                        description: "",
                        imageList: [],
                    });
                    setOpenUploadGallery(true);
                }}
            />
            <Modal
                open={openModal}
                centered
                title="Delete Confirmation"
                destroyOnClose
                okText="Delete"
                okButtonProps={{ style: { background: "red" } }}
                onCancel={() => setOpenModal(false)}
                onOk={() => deleteGallery({ id: selectedId })}
            >
                Do you want to delete?
            </Modal>
            <Modal
                open={openUploadGallery}
                centered
                footer={null}
                destroyOnClose
                onCancel={() => setOpenUploadGallery(false)}
            >
                <GalleryUpload
                    setOpenUploadGallery={setOpenUploadGallery}
                    setGalleryList={setGalleryList}
                    galleryList={galleryList}
                    galleryObj={galleryObj}
                    setGalleryObj={setGalleryObj}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    id={selectedId}
                    updateGalleryList={updateGalleryList}
                />
            </Modal>
        </>
    );
};
export default GalleryList;
