import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


function Hero() {

  let [imgToShow, setImgToShow] = useState(0);
  let images = ['https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669395666/df3f16b7-6626-49a2-9be9-8b0af744f22d_w52mkn.webp', 
  'https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669232667/theBetterStay/Properties/r-architecture-T6d96Qrb5MY-unsplash_ngbrwz.jpg', 
  'https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669660966/r-architecture-WQCkior21Gc-unsplash_1_l3zgel.jpg', 
  'https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669232667/theBetterStay/Properties/r-architecture-0tKCSyLXqQM-unsplash_uwi8gz.jpg'];

  const nextImg = () => {
    if(imgToShow == images.length-1){
      setImgToShow(0)
    } else {
      setImgToShow(imgToShow + 1)
    }
  }
  const prevImg = () => {
    if(imgToShow == 0){
      setImgToShow(images.length-1)
    } else {
      setImgToShow(imgToShow - 1)
    }
  }

  return (
    <div className="hero">
      <Link href={'/properties/123480'}>
        <div className="hero__image-wrapper">
          <Image
            className="hero__image"
            src={images[imgToShow]}
            alt="Mario's Pad"
            fill
          />
        </div>
      </Link>
      <div className="hero__info-wrapper">
        <div style={{zIndex: "1"}}>
          <h2 className="hero__title">Mario&apos;s Pad</h2>
          <span className="hero__specs">Arcade, Spa, Pool.</span>
        </div>
        <div className="hero__nav">
          <button className="hero__nav__button hero__nav__button--left" onClick={()=>prevImg()}>
            <FaArrowLeft size={24} />
          </button>
          <button className="hero__nav__button hero__nav__button--right" onClick={()=>nextImg()}>
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="hero__miniatures">
        <div className='miniature' onClick={()=>setImgToShow(0)}>
          <div className='miniature__wrapper'>
            <Image className="miniature__image" src={images[0]} fill />
          </div>
        </div>
        <div className='miniature' onClick={()=>setImgToShow(1)}>
          <div className='miniature__wrapper'>
            <Image className="miniature__image" src={images[1]} fill />
          </div>
        </div>
        <div className='miniature' onClick={()=>setImgToShow(2)}>
          <div className='miniature__wrapper'>
            <Image className="miniature__image" src={images[2]} fill />
          </div>
        </div>
        <div className='miniature' onClick={()=>setImgToShow(3)}>
          <div className='miniature__wrapper'>
            <Image className="miniature__image" src={images[3]} fill />
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default Hero
