import React from 'react'
import LoaderGIF from '../assets/images/logo-animated.gif'

const Loader = () => {
  return (
    <div className='loader'>
        <img src={LoaderGIF} alt='apple Loader' className='logo' />
    </div>
  )
}

export default Loader
