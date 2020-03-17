export const saveCredentials = email => (
    {
        type: "STORE_CREDENTIALS",
        payload: email,
    }
);