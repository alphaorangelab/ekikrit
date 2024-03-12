import { showErrorNotification } from "../../components/Notificaion";
import { baseApiUrl } from "../../config";
export const loginApi = ({ formData, history, setError }) => {
    fetch(`${baseApiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
            // Process the newly created user data
            console.log("New User Data:", newUserData);
            localStorage.setItem("userData", JSON.stringify(newUserData));
            history("/dashboard");
            showErrorNotification(newUserData?.message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
