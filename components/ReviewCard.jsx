import Image from 'next/image'
import Rating from './Rating'
import { FaQuoteLeft } from 'react-icons/fa'

function ReviewCard({ review, guest, overallRating, categoryRatings }) {
  return (
    <div className="review-card">
      <div className="review-card__content">
        <div>
          <FaQuoteLeft className="review-card__quote" size={26} />
        </div>
        <div className="review-card__text">{review}</div>
      </div>
      <hr />
      <div className="review-card__information">
      <span className="review__user__name">{guest?.fullName}</span>
        <Rating overallRating={overallRating} categoryRatings={categoryRatings} />
      </div>
    </div>
  )
}

export default ReviewCard
