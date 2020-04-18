export const signInUser = (access, refresh) => (
    {
        type: "SIGN_IN",
        payload: { access, refresh },
    }
);

export const signOutUser = () => (
    {
        type: "SIGN_OUT"
    }
);