import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';

import { client } from '../client'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

export const Login = () => {

    const navigate = useNavigate();

    //todo refactorizar este codigo para limpiar el componente
    const login = useGoogleLogin( {
        onSuccess: ( response ) => {
            //todo utilizar redux para el manejo del usuario

            axios.get( `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                    Accept: 'application/json'
                }
            } )
                .then( ( { data } ) => {
                    localStorage.setItem( 'user', JSON.stringify( data ) );
                    const { give_name, id, picture } = data;

                    const doc = {
                        _id: id,
                        _type: 'user',
                        userName: give_name,
                        image: picture,
                    }

                    client.createIfNotExists( doc )
                        .then( () => {
                            navigate( '/', { replace: true } )
                        } );
                } )
                .catch( ( err ) => console.log( err ) );
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
