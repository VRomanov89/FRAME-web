'use client'

import { useState, useEffect } from 'react'
import SignupPopup from './SignupPopup'

export default function PopupProvider({ children }: { children: React.ReactNode }) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {children}
      <SignupPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  )
} 