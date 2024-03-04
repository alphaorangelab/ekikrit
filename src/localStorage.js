export const getToken = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    console.log(userData, "userdata");
    if (userData !== null) {
        const { token } = userData;

        return token;
    }
};
