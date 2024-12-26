"use client"

import { useState, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function MuissaButton() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const startAnimation = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      controls.start({
        scale: [1, 1.05, 1],
        y: [0, -5, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        },
      })
    }
  }, [isAnimating, controls])

  const buttonVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
  }

  return (
    <motion.button
      className={`relative overflow-hidden border-b-[5px] text-lg sm:text-xl md:text-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors duration-500 ease-in-out z-10 ${
        isHovered ? 'bg-white text-[#00305C] border-[#00305C]' : 'bg-[#00305C] text-white border-white'
      }`}
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      variants={buttonVariants}
      initial="initial"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => {
        setIsHovered(true)
        startAnimation()
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        setIsAnimating(false)
        controls.stop()
      }}
      onTapStart={startAnimation}
    >
      <span className="relative z-10 transition-colors duration-500">
        ওয়েবিনার বুক করুন
      </span>
      <motion.div
        className="absolute inset-0 bg-white rounded-lg"
        initial={{ scale: 0 }}
        animate={isHovered ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

