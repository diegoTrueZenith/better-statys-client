import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Information() {
    const [toggler, setToggler] = useState(true);

  return (
    <div className='information'>
        <div id="left">
            <div className='information__blurb' id='top-blurb'>
                <Image
                    src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669669003/Group_237520_vgzlpa.png"
                    width={50}
                    height={50}
                />
                <div>
                    <p><b>Seamless communication</b></p>
                    <p>with us at all times.</p>
                </div>
            </div>
            <div className='information__blurb' id='bottom-blurb'>
                <div>
                    <p>Vacation</p>
                    <p><b>rentals with a difference.</b></p>
                </div>
                <Image
                    src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669669003/Group_237521_nnmiqz.png"
                    width={50}
                    height={50}
                    className="house-icon"
                />
            </div>
        </div>
        <div id="right">
            <h2>Deluxe Vacation Rentals Made Easy</h2>
            <p>Our entire process is designed to be a stress-free experience. Simply choose your location, then use our integrated booking system to select the dates of your stay, and then, just relax and we’ll take care of the rest.</p>
            <Link href="/rentals"><button className="button--primary">See More</button></Link>
        </div>
    </div>
  )
}

export default Information
