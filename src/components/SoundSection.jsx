import React from "react";
import BuyAndLearnMoreButton from '../components/commonComponent/BuyAndLearnMoreButton';


const SoundSection = () => {
  const handleLearnMore=()=>{
    const element=document.querySelector('.display-section');
        window.scrollTo({
            top:element?.getBoundingClientRect().bottom,
            left:0,
            behavior:'smooth'
        });
  }
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base.</p>
          <span className="description">From ₹129900.00* before trade‑in</span>
          <BuyAndLearnMoreButton text='Buy' onClick={handleLearnMore} isLearnMore={true}/>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
