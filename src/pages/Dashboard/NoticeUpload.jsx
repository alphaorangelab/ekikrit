import { useEffect, useState } from "react";
import { Button, message, Switch, Upload } from "antd";
import { InboxOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { StyledNewsUpload } from "./style";
import { dummyRequest } from "../../helper";
import { saveNotice } from "./api";
import { IoCloseCircle } from "react-icons/io5";
import { baseApiUrl } from "../../config";
import { useTranslation } from "react-i18next";
import { getToken } from "../../localStorage";

const NoticeUpload = () => {
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // const { token } = userData;
    const token = getToken();
    const { t } = useTranslation();

    const [noticeObj, setNoticeObj] = useState({
        notice: false,
        noticeUrl: "",
        id: "",
    });
    const { Dragger } = Upload;

    useEffect(() => {
        fetch(`${baseApiUrl}/notice`, {
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
            .then((newUserData) => {
                // Process the newly created user data
                setNoticeObj({
                    ...noticeObj,
                    notice: newUserData[0].notice,
                    noticeUrl: newUserData[0].noticeUrl,
                    id: newUserData[0]?._id,
                });
                console.log("New User Data:", newUserData);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const props = {
        name: "file",
        maxCount: 1,
        showUploadList: false,
        accept: "image/*",
        customRequest: dummyRequest,
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                const file = new FormData();
                file.append("files", info?.file?.originFileObj);
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
                        setNoticeObj({
                            ...noticeObj,
                            noticeUrl: data?.urls[0],
                        });
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

    const removeNotice = () => {
        setNoticeObj({
            ...noticeObj,
            noticeUrl: "",
        });
    };
    console.log(noticeObj, "noticebject");
    return (
        <StyledNewsUpload>
            <div>
                <h2>Upload Notice</h2>
                <Dragger {...props} disabled={noticeObj?.noticeUrl != ""}>
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
            </div>
            {/* <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                    border: "1px solid #f1f1f1",
                    padding: "10px",
                }}
            > */}
            {noticeObj?.noticeUrl && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "220px",
                        margin: "30px 0",
                    }}
                >
                    <img
                        src={noticeObj?.noticeUrl}
                        height={200}
                        width={200}
                        alt="notice"
                        style={{ position: "relative" }}
                    />
                    <IoCloseCircle
                        width={50}
                        height={50}
                        color="red"
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            bottom: "515px",
                            left: "625px",
                        }}
                        onClick={() => removeNotice()}
                    />
                </div>
            )}

            {/* </div> */}
            <div>
                <h2>Enable Notice</h2>
                <Switch
                    checked={noticeObj?.notice}
                    onChange={(checked) =>
                        setNoticeObj({ ...noticeObj, notice: checked })
                    }
                />
            </div>
            <div
                style={{
                    marginTop: "120px",
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button
                    size="large"
                    style={{
                        width: "100px",
                        background: "#027d34",
                        color: "#ffffff",
                    }}
                    onClick={() =>
                        saveNotice({
                            notice: noticeObj,
                            id: noticeObj?.id,
                        })
                    }
                >
                    {t("Save")}
                </Button>
            </div>
        </StyledNewsUpload>
    );
};

export default NoticeUpload;
