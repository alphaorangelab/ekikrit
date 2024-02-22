import { notification } from "antd";

const NotificationType = {
    SUCCESS: "success",
    ERROR: "error",
};

export const showSuccessNotification = (message, description) => {
    notification.destroy();
    notification[NotificationType.SUCCESS]({
        message: (
            <div style={{ paddingRight: "15px", width: "100%" }}>{message}</div>
        ),
        description: (
            <div style={{ paddingRight: "15px", width: "100%" }}>
                {description}
            </div>
        ),
    });
};

export const showErrorNotification = (message, description) => {
    notification.destroy();
    notification[NotificationType.ERROR]({
        message: (
            <div style={{ paddingRight: "15px", width: "100%" }}>{message}</div>
        ),
        description: (
            <div style={{ paddingRight: "15px", width: "100%" }}>
                {description}
            </div>
        ),
    });
};
