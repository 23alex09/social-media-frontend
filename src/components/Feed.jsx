import { useState } from "react"
import { useParams } from "react-router-dom"

import { client } from "../client"
import { MasonryLayout } from './MasonryLayout'
import { Spinner } from './Spinner'

export const Feed = () => {

    const [ loading, setLoading ] = useState( false );

    if ( loading ) return <Spinner message={ 'We are adding new ideas to your feed!' } />

    return (
        <div>Feed</div>
    )
}
