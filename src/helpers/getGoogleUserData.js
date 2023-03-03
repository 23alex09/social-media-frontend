import axios from "axios";

export const getGoogleUserData = async ( response ) => {
    try {
        const { data } = await axios.get( `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
            headers: {
                Authorization: `Bearer ${response.access_token}`,
                Accept: 'application/json'
            }
        } )

        return data;
    } catch ( error ) {
        console.log( error.message );
    }
}