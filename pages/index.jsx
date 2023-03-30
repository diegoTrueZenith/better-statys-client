import Hero from 'components/Hero'
import ReservationFinder from 'components/ReservationFinder'
import REVIEWS from 'data/reviews.json'  // Import JSON file

import PropertyDisplayCard from 'components/PropertyDisplayCard'
import FAQ from 'components/FAQ'
import Image from 'next/image'
import Information from 'components/Information'

const faqData = [
  {
    question: 'State-of-The-Art Entertainment',
    answer: 'From indoor pools and hot tubs, to large flat screen TV’s and arcade game rooms, our homes offer stays unlike any other out there. The entertainment that you will experience at The Better Stay is truly unlike any other.',
  },
  {
    question: 'High-End & Luxurious',
    answer: 'Nothing says luxury like being able to walk into a home and it’s clean, tidy, and spacious. We take pride in our homes, and ensure that they are in an immaculate condition when you arrive. Every piece of furniture was selected to ensure comfort and luxury. We offer all of this without breaking the bank.',
  },
  {
    question: 'Perfect For Families',
    answer: 'There is something truly special about getting away with your family. Where a hotel separates you from the family experience, our homes bring you closer together with shared spaces to create great memories. Book today to give your family the vacation of a lifetime!',
  },
]
import SliderReview from 'components/SliderReview'
import Link from "next/link";
export default function Home({ reviews }) {
  return (

    <>
      <div className="page-container">
        <Hero />
        <ReservationFinder />
        <Information />
      </div>
      
        <SliderReview reviews={reviews} />
      
      <div className="page-container">
        <section className="recommendation">
          <div className="recommendation__container">
            <h2>Why People Recommend The Better Stay</h2>
            <p>
              At The Better Stay properties, we provide a level of comfort and relaxation that is difficult to find in a typical hotel or vacation rental. Our homes offer high-end furnishings, top-of-the-line appliances, and other amenities that can make a vacation feel truly indulgent and luxurious. You and your family deserve it!
            </p>
            <FAQ className="recommendation__faq" data={faqData} />
            <Link href="/services"><button className="button--primary recommendation__button">
              Learn more
            </button></Link>
          </div>
          <div className="recommendation__image-wrapper">
            <Image
              src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669660966/r-architecture-WQCkior21Gc-unsplash_1_l3zgel.jpg"
              alt="Testing"
              width={672}
              height={448}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  /*
  const res = await fetch(`${process.env.API_URL}/reviews`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.WWLVibGk3EGqmJOEGtl8oR7o85clEY3i0v8CjJ49l40',
    },
  })
  const reviews = await res.json()
  console.log(reviews)
  */
  return {
    props: {
      reviews: REVIEWS,
    },
  }
}
