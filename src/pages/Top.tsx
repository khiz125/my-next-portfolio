import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../../public/assets/hi.json"


const Top = () => {

  // const player = useRef<Player>(null);

  return (
    <div id='top'>
      <Player
        autoplay
        loop
        src={animationData}
        background='none'
        speed={0.6}
        style={{ zIndex: 1}}
      />
    </div>
  )
}

export default Top