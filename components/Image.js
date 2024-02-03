// ResponsiveImage.js

import React from "react";
import Image from "next/image";

export default function ResponsiveImage({
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  src,
  priority = false,
  photoAspectRatio = "",
  customAspectRatio = '',
  alt,
  children,
}) {

  return (
    <section style={{ width: "100%", marginBottom: 40, position: "relative" }}>
      <div>
        <figure
          className={''}
          style={{
            paddingTop: photoAspectRatio === 'square' ? '100%' : photoAspectRatio === 'landscape' ? '133%' : customAspectRatio ? customAspectRatio : '70%'
          }}
        >
          <Image
            fill
            alt={alt}
            src={src}
            quality={90}
            priority={priority}
            sizes={sizes}
          />
        </figure>
      </div>
      {children}
    </section>
  );
}
