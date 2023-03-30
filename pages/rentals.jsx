import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Hero from 'components/Hero'
import ReservationFinder from 'components/ReservationFinder'
import PropertyDisplayCard from 'components/PropertyDisplayCard'
import Link from 'next/link'

function Rentalspage(props) {
  const [section, setSection] = useState(1)
  const { available = '414 Available Houses' } = props
  return (
    <div className="rentalspage">
      <div className="page-container">
        <Hero />
        <ReservationFinder />
        <div className="rentals-faqs">
          {/* <div className="faq-sections">
            <button
              onClick={() => setSection(1)}
              className={
                section == 1 ? 'button--primary' : 'button--deselected'
              }
            >
              {' '}
              For Rentals{' '}
            </button>
            <button
              onClick={() => setSection(2)}
              className={
                section == 2 ? 'button--primary' : 'button--deselected'
              }
            >
              {' '}
              Price{' '}
            </button>
            <button
              onClick={() => setSection(3)}
              className={
                section == 3 ? 'button--primary' : 'button--deselected'
              }
            >
              {' '}
              Home Type{' '}
            </button>
            <button
              onClick={() => setSection(4)}
              className={
                section == 4 ? 'button--primary' : 'button--deselected'
              }
            >
              {' '}
              More{' '}
            </button>
          </div> */}
        </div>
        <div className="rentals__property-display">
          <PropertyDisplayCard />
          <PropertyDisplayCard />
          <PropertyDisplayCard />
          <PropertyDisplayCard />
          <PropertyDisplayCard />
          <PropertyDisplayCard />
        </div>
      </div>
      <div className="rentals__property-section">
        <div className="rentals__property-container">
          <h4>Do You Need a place to live?</h4>
        </div>
        <div className="property-container-images">
          <div className="rentals-property-image">
            <Image
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669749360/avdb_asd_w1bzo3.png"
              width={500}
              height={300}
              alt="Avatar"
            />
            <div className="text_container">
              <div className="rentals-property__text-left">
                <h4>Rent a House</h4>
                <p>{available}</p>
                <div className="rentals-property__text-right">
                  <Link href={'/.'}>
                    <span>Learn More</span>
                    <FaArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rentals-property-image">
            <Image
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669749360/avdb_asd_w1bzo3.png"
              width={500}
              height={300}
              alt="Avatar"
            />
            <div className="text_container">
              <div className="rentals-property__text-left">
                <h4>Rent a House</h4>
                <p>{available}</p>
                <div className="rentals-property__text-right">
                  <Link href={'/.'}>
                    <span>Learn More</span>
                    <FaArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rentalspage

export const getServerSideProps = async (context) => {
  if (Object.keys(context.query).length === 0) {
    return {
      props: {},
    }
  }
  const query = {
    place: context.query.place,
    guests: context.query.guests,
    checkIn: context.query.checkIn,
    checkOut: context.query.checkOut,
  }
  console.log('Getting rentals from API');
  // Changed from /rentals as the code was the same on the API end
  const url = new URL(`${process.env.API_URL}/properties`);
  url.search = new URLSearchParams(query).toString();
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const js = await res.json()
  console.log(js)
  return {
    props: { query },
  }
}
