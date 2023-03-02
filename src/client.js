// fichero para la configuracion de sanity del lado del cliente
import sanityClient, { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// En sanity manager tendremos que añadir la url del front-end en la ventana API < Token < CORS
export const client = createClient( {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID, //Lo obtenemos desde el sanity manage (en este projecto npm manage)
    dataset: 'production',
    apiVersion: '2023-03-02',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN, // Desde la ventana de API de sanity manage
} )

const builder = imageUrlBuilder( client );

export const urlFor = ( source ) => builder.image( source );