import Image from 'next/image'
import Link from 'next/link';

function Footer() {
  const takeToTrueZenithWebsite = () => {
      console.log("hello");
  }
  return (
  <div className='full-width-footer'>
    <div className="layout-footer">
      <div className="wrapper-footer">
        <div id="left">
          <div className='company-brief'>
            <Image
              className="logo"
              width={150}
              height={50}
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669228061/theBetterStay/Monotono_ymgckn.png"
              alt="logo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              amet consectetur adipisicing elit. Similique. Lorem ipsum dolor sit.
            </p>
          </div>
       
          <div className="suscribe">
            <input type={'email'} placeholder={'Email@example.com'}></input>
            <button> Enter </button>
          </div>
          <p id="label-suscribe">
            *Get the lastest information and deals by just signing up your email
            with us. No Spam Btw.
          </p>
        </div>
        <div id="right">
          <div>
            <h2> Company </h2>
            <Link href={"/"}> Home </Link>
            <Link href={"/rentals"}>  Rentals </Link>
            <Link href={"/services"}>  Services </Link>
            <Link href={"/contact"}>  Contact Us </Link>
          </div>
          <div>
            <h2> Support </h2>
            <Link href={"/questions"}> Questions </Link>
            <Link href={"/termsandconditiones"}> Terms & Conditions </Link>
            <Link href={"/help"}> Help </Link>
          </div>
          <div>
            <h2> Other </h2>
            <Link href={"/"}> Lorem Ipsum </Link>
            <Link href={"/"}> Lorem Ipsum </Link>
            <Link href={"/"}> Lorem Ipsum </Link>
          </div>
        </div>
      </div>
      <div className="reservedRights">
        <div> 
            <h2 onClick={takeToTrueZenithWebsite}> Designed and Managed by True Zenith Creative </h2>
        </div>
        <div id="right">
            <h2> @2022. All Rights Reserved </h2>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Footer
