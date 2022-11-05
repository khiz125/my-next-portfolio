import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from "../../public/assets/hi.json";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Top.module.css";

const Top = () => {

  const items = [
    {
      id: 1,
      text: "Hello!",
      color: "#8e44ad"
    },
    {
      id: 2,
      text: "こんにちは!",
      color: "#2980b9"
    },
    {
      id: 3,
      text: "Bonjour!",
      color: "#c0392b"
    },
    {
      id: 4,
      text: "Hola!",
      color: "#16a085"
    },
  ];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="top">
      <AnimatePresence>
        <motion.div
          className={styles.text}
          key={items[index].id}
          style={{color: `${items[index].color}`}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-20, 0] }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ease: "easeInOut"}}
        >
          {items[index].text}
        </motion.div>
      </AnimatePresence>
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