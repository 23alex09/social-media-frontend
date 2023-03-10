import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


import { NavBar, Feed, PinDetail, CreatePin, Search } from '../components'

export const Pins = ( { user } ) => {
    //todo el searchTerm podria estar en un Context y usar un reducer en vez de un estado
    const [ searchTerm, setSearchTerm ] = useState( '' )

    return (
        <div className='px-2 md:px-5'>
            <div className='bg-gray-50'>
                <NavBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } user={ user } />
            </div>
            <div className='h-full'>
                <Routes>
                    <Route path='/' element={ <Feed /> } />
                    <Route path='/category/:categoryId' element={ <Feed /> } />
                    <Route path='/pin-detail/:pinId' element={ <PinDetail user={ user } /> } />
                    <Route path='/create-pin' element={ <CreatePin user={ user } /> } />
                    <Route path='/search' element={ <Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } /> } />
                </Routes>
            </div>
        </div>
    )
}
