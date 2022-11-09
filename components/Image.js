import React from 'react'
import Image from 'next/image'

export function NextImage({
  url,
  alt = 'img',
  priority = false,
  height = '',
  width = '',
  src = '',
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {


  return (
    <Image
      height={height}
      width={width}
      url={url}
      src={src}
      alt={alt}
      priority={priority}
      fill={fill}
      sizes={sizes}
      quality={quality}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}


