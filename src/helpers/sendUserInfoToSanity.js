import { client } from '../client'

export const sendUserInfoToSanity = async ( data ) => {
    const { given_name, id, picture } = data;

    const doc = {
        _id: id,
        _type: 'user',
        userName: given_name,
        image: picture,
    };

    await client.createIfNotExists( doc );
}