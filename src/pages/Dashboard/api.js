import {
    showErrorNotification,
    showSuccessNotification,
} from "../../components/Notificaion";
import { baseApiUrl } from "../../config";
import { getToken } from "../../localStorage";

// const userData = JSON.parse(localStorage.getItem("userData"));
// console.log(userData, "userdata");
// if (userData !== null) {
//     var { token } = userData;

// }

const token = getToken();

export const uploadFileApi = ({ formData }) => {
    console.log(formData, "file at the..");
    const file = new FormData();
    file.append("file", formData.originFileObj);
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
            // Process the newly created user data
            return data.json();
            // localStorage.setItem("userData", JSON.stringify(newUserData));
        })
        .catch((error) => {
            console.error("Error:", error);
            showErrorNotification("error", error);
        });
};

export const saveNotice = ({ notice, id }) => {
    fetch(`${baseApiUrl}/notice/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(notice),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Process the newly created user data
            console.log(data, "Data");
            showSuccessNotification("success", "Notice Uploaded Successfully");
            // localStorage.setItem("userData", JSON.stringify(newUserData));
        })
        .catch((error) => {
            console.error("Error:", error);
            showErrorNotification("error", error);
        });
};

export const saveGallery = ({
    gallery,
    setOpenUploadGallery,
    setGalleryObj,
    setGalleryList,
    galleryList,
}) => {
    fetch(`${baseApiUrl}/gallery`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(gallery),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Process the newly created user data
            console.log(data, "Data");
            setOpenUploadGallery(false);
            const obj = {
                title: data?.gallery?.title,
                description: data?.gallery?.description,
                imageList: data?.gallery?.imageList,
            };
            setGalleryList([...galleryList, obj]);
            setGalleryObj({
                title: "",
                description: "",
                imageUrl: "",
                imageSize: "",
                imageName: "",
            });
            showSuccessNotification("success", "Gallery Uploaded Successfully");

            // localStorage.setItem("userData", JSON.stringify(newUserData));
        })
        .catch((error) => {
            console.error("Error:", error);
            showErrorNotification("error", error);
        });
};

export const updateGallery = ({
    gallery,
    setOpenUploadGallery,
    setGalleryObj,
    setGalleryList,
    galleryList,
    id,
}) => {
    fetch(`${baseApiUrl}/gallery/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(gallery),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Process the newly created user data
            console.log(data, "Data");
            setOpenUploadGallery(false);
            const obj = {
                title: data?.gallery?.title,
                description: data?.gallery?.description,
                imageList: data?.gallery?.imageList,
            };
            setGalleryList([...galleryList, obj]);
            setGalleryObj({
                title: "",
                description: "",
                imageUrl: "",
                imageSize: "",
                imageName: "",
            });
            showSuccessNotification("success", "Gallery Updated Successfully");

            // localStorage.setItem("userData", JSON.stringify(newUserData));
        })
        .catch((error) => {
            console.error("Error:", error);
            showErrorNotification("error", error);
        });
};

export const deleteGallery = ({ id }) => {
    fetch(`${baseApiUrl}/gallery/${id}`, {
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
            console.log(data, "Data");
            showSuccessNotification("success", "Deleted Successfully");

            // localStorage.setItem("userData", JSON.stringify(newUserData));
        })
        .catch((error) => {
            console.error("Error:", error);
            showErrorNotification("error", error);
        });
};
