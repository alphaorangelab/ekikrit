import { Button, Modal, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import FloatingBtn from "../../components/FloatingBtn";
import GalleryUpload from "./GalleryUpload";

const GalleryList = () => {
    const userData = localStorage.getItem("userData");
    const { token } = userData;

    const [galleryList, setGalleryList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openUploadGallery, setOpenUploadGallery] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [galleryObj, setGalleryObj] = useState({
        title: "",
        description: "",
        imageList: [],
    });

    console.log(galleryList, "gallery list");

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
                    {data?.imageList.map((single) => (
                        <Tag
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px",
                            }}
                            key={single?._id}
                            color="blue"
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
                </div>
            ),
        },

        {
            title: "Action",
            render: (data) => (
                <Space size="middle">
                    {/* <Button
                        onClick={() => {
                            setOpenUploadGallery(true);
                            setSelectedId(data?._id);
                        }}
                        type="primary"
                    >
                        Edit
                    </Button> */}
                    <Button
                        onClick={() => {
                            setOpenModal(true);
                            setIsEdit(true);
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
    useEffect(() => {
        fetch("http://localhost:3000/gallery", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Process the newly created user data

                console.log("New User Data:", data);
                setGalleryList(data?.galleryList);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const deleteGallery = ({ id }) => {
        fetch(`http://localhost:3000/gallery/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Process the newly created user data
                setOpenModal(false);
                setGalleryList(
                    galleryList.filter(
                        (single) =>
                            single?._id !== data?.deletedGalleryItem?._id
                    )
                );
                console.log(data, "Data");
                // localStorage.setItem("userData", JSON.stringify(newUserData));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        setLoading(true);
        if (openUploadGallery) {
            fetch(`http://localhost:3000/gallery/${selectedId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    // Process the newly created user data
                    setGalleryObj({
                        title: data?.gallery?.title,
                        description: data?.gallery?.description,
                        imageList: data?.gallery?.imageList,
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setLoading(false);
                });
        }
    }, [openUploadGallery]);

    return (
        <>
            <Table columns={columns} dataSource={galleryList} />
            <FloatingBtn
                tooltipTitle={"Upload Gallery"}
                onClick={() => {
                    setOpenUploadGallery(true);
                    setIsEdit(false);
                }}
            />
            <Modal
                open={openModal}
                centered
                title="Delete Confirmation"
                children="Do you want to delete?"
                destroyOnClose
                okText="Delete"
                okButtonProps={{ style: { background: "red" } }}
                onCancel={() => setOpenModal(false)}
                onOk={() => {
                    deleteGallery({ id: selectedId });
                }}
            />
            <Modal
                open={openUploadGallery}
                centered
                footer={null}
                children={
                    <GalleryUpload
                        setOpenUploadGallery={setOpenUploadGallery}
                        setGalleryList={setGalleryList}
                        galleryList={galleryList}
                        galleryObj={galleryObj}
                        setGalleryObj={setGalleryObj}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        id={selectedId}
                    />
                }
                onCancel={() => setOpenUploadGallery(false)}
            />
        </>
    );
};
export default GalleryList;
