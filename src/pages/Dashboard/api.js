import {
    showErrorNotification,
    showSuccessNotification,
} from "../../components/Notificaion";
import { baseApiUrl } from "../../config";

// const userData = JSON.parse(localStorage.getItem("userData"));
// console.log(userData, "userdata");
// if (userData !== null) {
//     var { token } = userData;

// }

export const uploadFileApi = ({ formData, token }) => {
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

export const saveNotice = ({ notice, id, token, noticeUrls }) => {
    console.log(notice, "notice at save data");
    fetch(`${baseApiUrl}/notice/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({ notice, noticeUrls }),
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
    token,
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
    token,
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
            setOpenUploadGallery(false);
            const obj = {
                title: data?.gallery?.title,
                description: data?.gallery?.description,
                imageList: data?.gallery?.imageList,
            };
            setGalleryList(
                galleryList.map((item) =>
                    item._id === data?.gallery?._id ? { ...item, ...obj } : item
                )
            );
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

export const deleteGallery = ({ id, token }) => {
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
