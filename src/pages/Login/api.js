export const loginApi = ({ formData, history }) => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((newUserData) => {
            // Process the newly created user data
            console.log("New User Data:", newUserData);
            localStorage.setItem("userData", JSON.stringify(newUserData));
            history("/dashboard");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
