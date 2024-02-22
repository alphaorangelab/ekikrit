import { InboxOutlined } from "@ant-design/icons";
import { Button, message, Switch, Upload } from "antd";
import { StyledNewsUpload } from "./style";
import { dummyRequest } from "../../helper";
const { Dragger } = Upload;

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
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};
const NoticeUpload = () => (
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
        <div>
            <h2>Enable Notice</h2>
            <Switch />
        </div>
        <div
            style={{
                marginTop: "200px",
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
            >
                Save
            </Button>
        </div>
    </StyledNewsUpload>
);
export default NoticeUpload;
