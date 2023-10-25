import Image from 'next/image'
import React from 'react'

import ResumePNG from '/public/Resume.png'

export default function Resume() {
  return (
    <Image src={ResumePNG} alt='resume'/>

  )
}
