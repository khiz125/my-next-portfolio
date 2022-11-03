import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from "../../public/assets/hi.json";
import { motion } from "framer-motion";
import styles from "../styles/Top.module.css";

const Top = () => {

  return (
    <div id="top" className={styles.text}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [50, 0] }}
        transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatDelay: 2 
        }}
      >
        <div className={styles.wisteria}>Hello!</div>
        <div className={styles.belize}>wonderful.</div>
        <div className={styles.pomegranate}>fancy.</div>
        <div className={styles.green}>beautiful.</div>
        <div className={styles.midnight}>cheap.</div>
      </motion.div>
      {/*
      <Player
        autoplay
        loop
        src={animationData}
        background='none'
        speed={0.6}
        style={{ zIndex: 1 }}
      />
      */}
      
    </div >
  )
}

export default Top