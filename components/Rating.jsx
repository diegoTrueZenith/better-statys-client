import { FaStar } from 'react-icons/fa'

import { Popover } from 'react-tiny-popover'
import { useState } from 'react'
function Rating({ overallRating, categoryRatings }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <Popover
      isOpen={isPopoverOpen}
      containerStyle={{ zIndex: 100 }}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      content={
        categoryRatings && (
          <div className="rating__popover">
            <ul>
              <li>Value: {categoryRatings.value}</li>
              <li>Communication: {categoryRatings.communication}</li>
              <li>Accuracy: {categoryRatings.accuracy}</li>
              <li>Location: {categoryRatings.location}</li>
              <li>Cleanliness: {categoryRatings.cleanliness}</li>
              <li>Check-in: {categoryRatings.checkin}</li>
            </ul>
          </div>
        )
      }
      padding={10}
    >
      <div
        className="rating"
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}
      >
        <FaStar className="rating__icon" />
        <span className="rating__value">
          {Number.parseFloat(overallRating).toFixed(1)}
        </span>
      </div>
    </Popover>
  )
}

export default Rating
