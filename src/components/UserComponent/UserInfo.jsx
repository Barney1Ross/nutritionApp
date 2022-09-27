
export const getUserInfo = () => {
    return localStorage.getItem('') ? JSON.parse(localStorage.getItem('userInfo')) : null;
}

export const setUserInfo = (userInfo) => {

    const userData = getUserInfo();

    const newUserData = { ...userData, ...userInfo };

    localStorage.setItem('userInfo', JSON.stringify(newUserData));
}

export const removeUserInfo = () => {
    localStorage.removeItem('userInfo');
}