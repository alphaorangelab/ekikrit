import { useEffect, useState } from "react";
import { Button, message, Switch, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { StyledNewsUpload } from "./style";
import { dummyRequest } from "../../helper";
import { saveNotice } from "./api";
import { IoCloseCircle } from "react-icons/io5";
import { baseApiUrl } from "../../config";
import { useTranslation } from "react-i18next";
import { getToken } from "../../localStorage";

const NoticeUpload = () => {
    const [token, setToken] = useState("");
    const { t } = useTranslation();

    const [noticeObj, setNoticeObj] = useState({
        notice: false,
        noticeUrls: [],
        id: "",
    });
    const { Dragger } = Upload;

    // Get token from local storage on component mount
    useEffect(() => {
        const newToken = getToken();
        if (newToken) {
            setToken(newToken);
        }
    }, []);

    // Fetch existing notices from the backend
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
                setNoticeObj({
                    ...noticeObj,
                    notice: newUserData[0]?.notice || false,
                    noticeUrls: newUserData[0]?.noticeUrls || [],
                    id: newUserData[0]?._id,
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    // Handle file uploads
    const props = {
        name: "file",
        multiple: true,
        showUploadList: false,
        accept: "image/*",
        customRequest: dummyRequest,
        onChange(info) {
            const { status } = info.file;

            if (status === "done") {
                const files = new FormData();
                info.fileList.forEach((file) => {
                    files.append("files", file.originFileObj);
                });

                fetch(`${baseApiUrl}/upload`, {
                    method: "POST",
                    headers: {
                        Authorization: token,
                    },
                    body: files,
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // Update state with unique URLs only
                        setNoticeObj((prev) => ({
                            ...prev,
                            noticeUrls: Array.from(
                                new Set([...prev.noticeUrls, ...data.urls])
                            ),
                        }));
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    // Remove specific notice image from the state
    const removeNotice = (urlToRemove) => {
        setNoticeObj((prev) => ({
            ...prev,
            noticeUrls: prev.noticeUrls.filter((url) => url !== urlToRemove),
        }));
    };

    return (
        <StyledNewsUpload>
            <div>
                <h2>Upload Notice</h2>
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
            </div>

            {noticeObj.noticeUrls.map((url, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "220px",
                        margin: "30px 0",
                    }}
                >
                    <img src={url} height={200} width={200} alt="notice" />
                    <IoCloseCircle
                        width={50}
                        height={50}
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeNotice(url)}
                    />
                </div>
            ))}

            <div>
                <h2>Enable Notice</h2>
                <Switch
                    checked={noticeObj.notice}
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
                    onClick={() => {
                        console.log(
                            {
                                notice: noticeObj.notice,
                                noticeUrls: noticeObj.noticeUrls,
                                id: noticeObj.id,
                                token,
                            },
                            "at the ..."
                        );
                        saveNotice({
                            notice: noticeObj.notice,
                            noticeUrls: noticeObj.noticeUrls,
                            id: noticeObj.id,
                            token,
                        });
                    }}
                >
                    {t("Save")}
                </Button>
            </div>
        </StyledNewsUpload>
    );
};

export default NoticeUpload;
