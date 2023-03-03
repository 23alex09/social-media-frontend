import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google'

import { client } from '../client'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { getGoogleUserData } from '../helpers/getGoogleUserData';
import { sendUserInfoToSanity } from '../helpers/sendUserInfoToSanity'

export const Login = () => {

    const navigate = useNavigate();

    const login = useGoogleLogin( {
        onSuccess: async ( response ) => {
            //todo utilizar redux para el manejo del usuario
            const data = await getGoogleUserData( response );
            localStorage.setItem( 'user', JSON.stringify( data ) );
            await sendUserInfoToSanity( data );
            navigate( '/', { replace: true } );
        },
        onError: ( error ) => console.log( error )
    } )

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={ shareVideo }
                    type='vide/mp4'
                    loop
                    controls={ false }
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={ logo } width='130px' alt='logo' />
                    </div>
                    <div className='shadow-2xl'>
                        <button
                            onClick={ () => login() }
                            className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                        //todo disable the button
                        >
                            <FcGoogle className='mr-4' /> Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
