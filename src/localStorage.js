export const getToken = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData !== null) {
        const { token } = userData;

        return token;
    }
};
