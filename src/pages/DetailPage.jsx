import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailPage = () => {
    const location = useLocation()

    console.log(location.state.pokemonName)
  return (
    <div>
        <div className="pt-10">
            <h1 className='text-center text-xl font-semibold pb-3'>Halaman Detail</h1>
            <div className="text-center">
                <p>Nama : {location.state.pokemonName}</p>
                <p>URL : {location.state.pokemonUrl}</p>
            </div>
        </div>
    </div>
  )
}

export default DetailPage
