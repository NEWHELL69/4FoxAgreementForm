import axios from 'axios';

// No point in handling errors here.

export const getStateForOAuth = async () => {
    const { data } = await axios.get(`./oauth/stateForOAuth`);
    return data;
}

export const getRedirectURL = async () => {
    const { data } = await axios.get(`./oauth/redirect_url`);
    return data;
}

export const getCheckJWT = async () => {
    try {
        await axios.get(`./oauth/checkJWT`);
    } catch(error) {
        return false;
    }

    return true;
}

export const getLogout = async () => {
    try {
        await axios.get(`./oauth/logout`);
    } catch(error) {
        return false;
    }

    return true;
}