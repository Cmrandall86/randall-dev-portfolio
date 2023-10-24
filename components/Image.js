/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

import mediaQueries from './Breakpoints'
import Image from 'next/image'

export default function ResponsiveImage({
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  src,
  priority = false,
  cardHoverEffect = false,
  hoverColor = '',
  photoAspectRatio = '',
  customHeightPercent = '',
  customHeightPercentMobile = '',
  customHeightPercentLarge = '',
  maxHeight,
  alt,
  children,
}) {
  return (
    <section style={{ width: '100%', marginBottom: 40, position: 'relative' }}>
      <div>
        <ImageBox
          $cardHoverEffect={cardHoverEffect}
          $hoverColor={hoverColor}
          $photoAspectRatio={photoAspectRatio}
          $customHeightPercent={customHeightPercent}
          $customHeightPercentMobile={customHeightPercentMobile}
          $customHeightPercentLarge={customHeightPercentLarge}
        >
          <Image
            fill
            alt={alt}
            src={src}
            quality={90}
            priority={priority}
            style={{
              objectFit: 'cover',
              maxHeight: maxHeight,
              borderRadius: '100%'
            }}
            sizes={sizes}
          />
        </ImageBox>
      </div>
      {children}
    </section>
  )
}

const ImageBox = styled.figure`
  position: relative;
  padding-top: ${({ $photoAspectRatio }) =>
    $photoAspectRatio === 'landscape'
      ? '100%'
      : $photoAspectRatio === 'square'
      ? '100%'
      : `${(4 / 3) * 100}%`};

  ${({ $customHeightPercent }) =>
    $customHeightPercent && `padding-top: ${$customHeightPercent}%;`}

  ${mediaQueries('max', 992)} {
    padding-top: ${({ $photoAspectRatio, $customHeightPercentMobile }) =>
      $photoAspectRatio === 'landscape'
        ? '100%'
        : `${$customHeightPercentMobile}%`};
  }

  ${mediaQueries('min', 1400)} {
    padding-top: ${({ $customHeightPercentLarge }) =>
      `${$customHeightPercentLarge}%`};
  }

  &:hover {
    ${({ $cardHoverEffect, $hoverColor }) =>
      $cardHoverEffect &&
      `
        content: "";
        position: absolute;
        background: ${$hoverColor};
        height: 100%;
        width: 100%;
        bottom: 0;
      `}
  }

`
