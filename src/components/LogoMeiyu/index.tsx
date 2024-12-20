import React from 'react'
import Image from 'next/image'

const LogoMeiyu: React.FC = () => {
  return (
    <Image
      src="/Meiyu-favicon/web-app-manifest-192x192.png"
      alt="Meiyu Logo"
      width={150}
      height={150}
    />
  )
}

export default LogoMeiyu
