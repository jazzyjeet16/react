import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const Displayalbum = () => {
    const {id}= useParams();
  const albumData= albumsData[id];
  console.log(albumData)
  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'> 
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p className=''>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4 className='text-2xl font-semibold mb-4 '>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                .1,23,154,89 likes
                .<b> 50 Songs</b>
            </p>
        </div>
      </div>
      <div className='flex flex-row gap-[250px] sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] '>
        <p><b className='mr-4 '>#</b>Title</p>
        <p>Album </p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt=""/>
      </div>
      <hr />
      {
        songsData.map((item,index)=>(
            <div className='flex flex-col gap=[250px]csm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg--[#ffffff2b] cursor-pointer'>
                
            </div>
        ))
      }
    </>
  )
}

export default Displayalbum
