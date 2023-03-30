import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from 'components/FAQ';

function Services() {
  const faqData = [
    {
      question: 'Is a Hotel or a The Better Stay rental better?',
      answer: 'To be honest, in most cases, our properties are better value for your money. This is especially true for families or groups. Where you would be paying the same or more for a hotel, we offer privacy, luxury, entertainment, and freedom, for your group or family. There’s nothing quite like being able to lay back and simply relax, knowing that everything is taken care of as it is with our properties.',
    },
    {
      question: 'Where are your properties located?',
      answer: 'At the moment, we have 4 properties in 2 locations. We have 3 different rental properties located in Rockford, Illinois, and we have 1 property located in Chicago. We will soon have a property in Terre Haute situated in Indiana too.',
    },
    {
      question: 'Do I have to bring anything along?',
      answer: 'Apart from your personal belongings, you don’t need to bring anything along. Our homes are catered to serve any and all of your needs. From fresh towels, to clean bedding, and even fully-stocked kitchen utensils, all the way to pool toys. Just bring yourself and fully relax into the entire experience.',
    },
    {
      question: 'Do we have to pay for the arcade games?',
      answer: 'Not at all! It’s all included in the price. Our Arcade is completely free to play, and will ensure that you and the kids will have hours of fun. Everything is part of the package and the experience, to make your stay a memorable experience.',
    },
    {
      question: 'Do you provide Long-Stay services?',
      answer: 'We do! All of our properties are rentable for 28 days or more. If you need any special arrangements, reach out to us and we would be more than happy to assist you with any plans or needs that you have.',
    },
  ]
  const [section, setSection] = useState(1); 
  
  return (
    <div className='services page-container'>
       <div className="two-columns introduction">
        <div id="left">
          <p>Rentals With A Difference</p>
          <h2>Luxury Service At Affordable Pricing</h2>
          <p>Enjoy our top-of-the-line service at The Better Stay.</p>
          <Link href="/rentals"><button className="button--primary"> See More </button></Link>
        </div>
        <div id="right"> 
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669678219/Group_237559_of7ia3.png"
            width={450}
            height={450}
            className="services-img1"
          />
        </div>
       </div>
       <div className="our-services">
        <h2>  Our Services </h2>
         <Link href="/rentals"><button className='button--primary'> Book Now </button></Link>
       </div>
      <div className='three-columns'>
        <div id="green" className='container'> 
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669745173/Group_237560_mqgkgy.png"
            width={50}
            height={50}
          />
          <h2>Luxury &amp; Comfort</h2>
          <p>Our properties were designed to give you the best experience possible. We offer ultra-luxury enjoyment at our homes, giving you that complete home-away-from-home feel. Not only will your entire family love it, but it would be the best possible accommodation that you can find in the Rockford and Chicago area.</p>
        </div>
        <div className='container'> 
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669745173/Group_fwr_xtpsnt.png"
            width={50}
            height={50}
          />
          <h2>Free-Play Arcade</h2>
          <p>All of our properties were designed with relaxation and entertainment in mind. It doesn’t matter if you’re in Rockford, or in Chicago, our properties will have hours of entertainment for you and the kids in our Free-Play Arcade rooms.</p>
        </div>
        <div className='container'> 
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669745173/rfqeff_naglsr.png"
            width={50}
            height={50}
          />
          <h2>Group &amp; Extended-Stay Friendly</h2>
          <p>Depending on the location, our homes can accommodate from 10 up to 16 guests. This makes our properties the perfect place for families, groups of friends, or even excursions. We also offer extended stay, where you are able to book our properties out for long periods of time, depending on your needs.</p>
        </div>
      </div>
      <div className="why-choose-us">
        <h2>Why Should You Choose Us?</h2>
        <p>Our rental properties provide a comfortable, safe, and stylish stay with all the amenities you need for a perfect vacation. We strive to ensure that you have the best experience possible while with us at The Better Stay.</p>
      </div>
      <div className="three-columns">
        <div className='container-insights'>
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669748597/rgegsega_knpdbj.png"
            width={50}
            height={50}
            className="insight-icon"
          />
          <h2>Affordable Prices</h2>
          <p>All of our homes deliver exceptional value for money at great prices! With ultra-luxury, privacy, and entertainment, our homes are the best choice for families and groups.</p>
        </div>
        <div className='container-insights'>
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669748597/rgegsega_knpdbj.png"
            width={50}
            height={50}
            className="insight-icon"
          />
          <h2>Beautiful Properties</h2>
          <p>We take pride in our properties and know that each home will give you the vacation experience of a lifetime. From our soft linen to our state-of-the-art kitchens, and even our arcade games and our pools. Everything was designed to bring you the best.</p>
        </div>
        <div className='container-insights'>
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669748597/rgegsega_knpdbj.png"
            width={50}
            height={50}
            className="insight-icon"
          />
          <h2>Better Than A Hotel</h2>
          <p>Get a 5-star experience, at rates that are cheaper than hotels, with more benefits and amenities. With everything that our homes have to offer your family, we beat any hotel in overall value and amenities.</p>
        </div>
      </div>
 
      <div className="two-columns results" >
        <div id="left" className='images-grid'>
          <Image
            src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669749360/avdb_asd_w1bzo3.png"
            width={500}
            height={430}
            className={'image-result'}
          />
          <div className='two-columns'>
            <Image
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669749361/aerbaev_ors47b.png"
              width={240}
              height={200}            
            />
            <Image
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669749360/avearv_kfozsn.png"
              width={240}
              height={200}            
            />
          </div>
        </div>
        <div id="right">
          <h2>Your Comfort Is Our Priority</h2>
          <p id="confort-priority">When it comes to your comfort, we never take shortcuts. We’re dedicated to ensuring you’re always well taken care of, from the moment you walk through our doors until the moment you leave. We want you to feel relaxed and at ease, so you can focus on enjoying your stay.</p>
          <div className="two-columns results" id='left-results' >
            <div>
              <h2>400+</h2>
              <p>Happy Customers</p>
            </div>
            <div>
              <h2>4</h2>
              <p>Available Properties</p>
            </div>
          </div>
          <div className="two-columns results" id='right-results'>
            <div>
              <h2>2</h2>
              <p>Different Cities</p>
            </div>
            <div>
              <h2>16</h2>
              <p>Maximum Group Size</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
        <h2> Frequently Asked Questions </h2> 
{/*
        <div className='faq-sections'>
          <button onClick={()=>setSection(1)} className={section == 1 ?'button--primary':'button--deselected'}> General </button>
          <button onClick={()=>setSection(2)} className={section == 2 ?'button--primary':'button--deselected'}> Rent a House </button>
          <button onClick={()=>setSection(3)} className={section == 3 ?'button--primary':'button--deselected'}> Rent an Apartment </button>
          <button onClick={()=>setSection(4)} className={section == 4 ?'button--primary':'button--deselected'}> Lorem Ipsum </button>
        </div>
*/}
        <FAQ className="recommendation__faq" data={faqData} />
      </div>
      

    </div>
  )
}

export default Services
