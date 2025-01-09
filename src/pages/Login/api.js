import { showErrorNotification } from "../../components/Notificaion";
import { baseApiUrl } from "../../config";
export const loginApi = ({
    formData: { userName, password },
    history,
    setError,
}) => {
    fetch(`${baseApiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }), // Use the correct structure
    })
        .then((response) => {
            if (!response.ok) {
                console.log("first");
                setError(true);
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((newUserData) => {
            console.log("New User Data:", newUserData);
            localStorage.setItem("userData", JSON.stringify(newUserData));
            history("/dashboard");
            // showErrorNotification(newUserData?.message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
