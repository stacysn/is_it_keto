export const authUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}