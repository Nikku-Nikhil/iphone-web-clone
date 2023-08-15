import React, { useRef } from 'react';
import iPhone from '../assets/images/iphone-14.jpg'
import IphoneWithHand from '../assets/images/iphone-hand.png';
import BuyAndLearnMoreButton from '../components/commonComponent/BuyAndLearnMoreButton';

const Jumbotron=()=>{

    const handleLearnMore=()=>{
        const element=document.querySelector('.sound-section');
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        });
    }

    return(
        <div className='jumbotron-section wrapper'>
           <h2 className='title'>New</h2>
           <img src={iPhone} alt='iPhone14' className='logo'/>
            <p className='text'>The Ultimate iPhone </p>
            <span className='description'>From ₹20650.00/month with instant savings & No Cost EMI</span>
            <BuyAndLearnMoreButton onClick={handleLearnMore} text='Buy' isLearnMore={true}/>
            <img src={IphoneWithHand} alt='iPhoneInHand' className='iphone-img '/>
        </div>
    )
}

export default Jumbotron;