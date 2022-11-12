import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from "../../public/assets/hi.json";
import { motion, Variants, AnimatePresence } from "framer-motion";
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
    const time = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(time);
  }, []);

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.5 }
    }),
    exit: {
      opacity: 0
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <main id="top">
      <AnimatePresence>
        <motion.section
          className={styles.text}
          key={items[index].id}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {items[index].text.split('').map((letter: string, i) => (
            <motion.span
              style={{ color: `${items[index].color}` }}
              key={i}
              variants={child}
            >
              {letter}
            </motion.span>
          ))}
        </motion.section>
      </AnimatePresence>
    </main >
  )
}

export default Top