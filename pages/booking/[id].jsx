import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
  useRef,
} from 'react'
import moment from 'moment'
import { Popover } from 'react-tiny-popover'
import currency from 'currency.js'
import { RiCloseFill } from 'react-icons/ri'
import cn from 'classnames'
import Image from 'next/image'
import { FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa'
import { DateRange } from 'react-date-range'

function BreakdownItem({ label, value, description, isDiscount }) {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
  const handleClick = () => {
    setIsPopoverOpen(!isPopoverOpen)
  }
  const handlePopoverClose = () => {
    setIsPopoverOpen(false)
  }
  return (
    <div className="breakdown-item">
      <Popover
        isOpen={isPopoverOpen && description}
        position={['top', 'left', 'bottom', 'right']}
        containerStyle={{ zIndex: 100 }}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={() => (
          <div className="breakdown-item__description">
            {description}{' '}
            <RiCloseFill
              className="breakdown-item__close"
              onClick={handlePopoverClose}
            />
          </div>
        )}
        padding={4}
      >
        <div
          className={cn({ 'breakdown-item__label': description })}
          onClick={handleClick}
        >
          {label}
        </div>
      </Popover>

      <div
        className={cn('breakdown-item__value', {
          'breakdown-item__value--discount': isDiscount,
        })}
      >
        {currency(value).format()} <span>USD</span>
      </div>
    </div>
  )
}

function BookingSummary({ checkIn, checkOut, prices, guests }) {
  const days = useMemo(() => {
    const checkInDate = moment(checkIn)
    const checkOutDate = moment(checkOut)
    return checkOutDate.diff(checkInDate, 'days')
  }, [checkIn, checkOut])

  const extraGuestFee = useMemo(() => {
    return prices.includedGuests && guests > prices.includedGuests
      ? (guests - prices.includedGuests) * prices.extraGuestFee * days
      : 0
  }, [prices, guests, days])

  const accomodationPrice = useMemo(() => {
    return prices.basePrice * days
  }, [prices, days])

  const weeklyDiscount = useMemo(() => {
    if (prices.priceFactors.weekly && days >= 7 && days < 28) {
      return (
        (1 - prices.priceFactors.weekly) * (accomodationPrice + extraGuestFee)
      )
    }
  }, [prices, days, accomodationPrice, extraGuestFee])

  const monthlyDiscount = useMemo(() => {
    if (prices.priceFactors.monthly && days >= 28) {
      return (
        (1 - prices.priceFactors.monthly) * (accomodationPrice + extraGuestFee)
      )
    }
  }, [prices, days, accomodationPrice, extraGuestFee])

  const handleBooking = () => {
    fetch(`${process.env.API_URL}/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({
        listingId: query.id,
        checkInDateLocalized: query.checkIn,
        checkOutDateLocalized: query.checkOut,
        status: 'pending',
        money: {
          fareAccommodation: accomodationCost,
          fareCleaning: prices.cleaningFee,
          currency: 'USD',
        },
        guest: guest,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="booking__summary">
      <h3 className="booking__summary__title">Booking Summary</h3>

      <div className="booking__summary__breakdown">
        <BreakdownItem
          label="Accommodation"
          value={accomodationPrice}
          description={`${currency(
            prices.basePrice
          ).format()} per night for ${days} nights.`}
        />
        {extraGuestFee ? (
          <BreakdownItem
            label="Extra guests fee"
            value={extraGuestFee}
            description={`${currency(
              prices.extraGuestFee
            ).format()} (per night) for each additional guest after ${
              prices.includedGuests
            } guests.`}
          />
        ) : null}
        {weeklyDiscount ? (
          <BreakdownItem
            label="Weekly discount"
            value={weeklyDiscount * -1}
            description={'Discount for staying longer than 7 days.'}
            isDiscount
          />
        ) : null}
        {monthlyDiscount ? (
          <BreakdownItem
            label="Monthly discount"
            value={monthlyDiscount * -1}
            description={'Discount for staying longer than 28 days.'}
            isDiscount
          />
        ) : null}
        <BreakdownItem
          label="Cleaning fee"
          value={prices.cleaningFee}
          description={'Fixed fee for cleaning services of the property.'}
        />

        <hr />
        <BreakdownItem
          label="Total"
          value={
            accomodationPrice +
            (extraGuestFee ?? 0) +
            prices.cleaningFee -
            (weeklyDiscount ?? 0) -
            (monthlyDiscount ?? 0)
          }
        />
      </div>
      <div className="booking__summary__description">
        You are booking for{' '}
        <strong>
          {guests} {guests > 1 ? 'guests' : 'guest'}
        </strong>{' '}
        from <strong>{moment(checkIn).format('dddd, MMM Do YYYY')}</strong> to{' '}
        <strong>{moment(checkOut).format('dddd, MMM Do YYYY')}</strong>{' '}
        <strong>({days} days)</strong>.
      </div>
      <button
        style={{ width: '100%', marginTop: '16px' }}
        className="button--primary"
        type="button"
        onClick={handleBooking}
      >
        {' '}
        Go To Checkout{' '}
      </button>
    </div>
  )
}

function Booking(props) {
  const wrapperRef = useRef(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const disabledDates = JSON.parse(props.disabledDates).map(
    (date) => new Date(date)
  )
  const query = JSON.parse(props.query)
  const property = JSON.parse(props.property)
  const { prices, terms } = property
  const [guests, setGuests] = React.useState(
    query.guests ? Math.min(Math.max(parseInt(query.guests), 1), property.accommodates) : 1
  )
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const [checkIn, setCheckIn] = React.useState(query.checkIn)
  const [checkOut, setCheckOut] = React.useState(query.checkOut)
  const [selectionRange, setSelectionRange] = useState({
    startDate: query.checkIn ? new Date(query.checkIn) : null,
    endDate: query.checkOut ? new Date(query.checkOut) : new Date(''),
    key: 'selection',
  })
  const handleRangeFocusChange = (ranges) => {
    if (ranges.reduce((acc, range) => acc + range, 0) === 0) {
      setShowCalendar(false)
    }
  }

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection)
    setCheckIn(ranges.selection.startDate)
    setCheckOut(ranges.selection.endDate)
  }

  const [guest, setGuest] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@testing.com',
    phone: '1234567890',
  })

  return (
    <div className="page-container booking">
      <div className="booking__property">
        <h2> {property.title} </h2>
        <Image
          src={property.pictures[0].original}
          width={300}
          height={200}
          alt="qwer"
          priority={true}
        />
        <div>
          <div>Min. Nights: {terms.minNights}</div>
          <div>Max. Nights: {terms.maxNights}</div>
          <div>Check In: {property.times.checkIn}</div>
          <div>Check Out: {property.times.checkOut}</div>
          {prices.includedGuests ? (
            <div>
              Included Guests:{' '}
              {prices.includedGuests
                ? prices.includedGuests
                : property.accommodates}{' '}
              <small>({property.accommodates} max.)</small>
            </div>
          ) : (
            <div>Included Guests: {property.accommodates}</div>
          )}
        </div>
        <div>
        <div className="rf__input-wrapper--shrink" style={{gridArea: "guests"}}>
        <span className="rf__input__label">Guests</span>
        <div className="rf__guests">
          <div className="rf__input__value">{`${guests} ${
            guests > 1 ? 'guests' : 'guest'
          }`}</div>
          <div className="rf__guests__buttons">
            <button
              className="rf__icon-button"
              onClick={() => setGuests(prev => {
                if (prev <= 1) return prev;
                return prev - 1
              })}
            >
              <FaMinus />
            </button>
            <button
              className="rf__icon-button"
              onClick={() => setGuests(prev => {
                if (prev >= property.accommodates) return prev;
                return prev + 1
              })}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
          <div className="rf__input-wrapper" style={{ gridArea: 'date' }}>
            <div
              className="rf__check-wrapper"
              onClick={() => setShowCalendar(true)}
            >
              <div className="rf__check-date">
                <span className="rf__input__label">Check-In</span>
                <div className="rf__input__value">
                  {selectionRange?.startDate ? (
                    <span>
                      {moment(selectionRange.startDate).format('ddd, DD MMM')}
                      <FaCalendarAlt />
                    </span>
                  ) : (
                    <span className="rf__input__value--placeholder">
                      Add date...
                    </span>
                  )}
                </div>
              </div>
              <div className="rf__check-date">
                <span className="rf__input__label">Check-Out</span>
                <div className="rf__input__value">
                  {selectionRange?.startDate ? (
                    <span>
                      {moment(selectionRange.endDate).format('ddd, DD MMM')}
                      <FaCalendarAlt />
                    </span>
                  ) : (
                    <span className="rf__input__value--placeholder">
                      Add date...
                    </span>
                  )}
                </div>
              </div>
            </div>
            {showCalendar && (
              <div ref={wrapperRef} className="rf__date-range">
                <DateRange
                  onRangeFocusChange={handleRangeFocusChange}
                  onChange={handleSelect}
                  showSelectionPreview={true}
                  showDateDisplay={false}
                  moveRangeOnFirstSelection={false}
                  ranges={[selectionRange]}
                  direction="horizontal"
                  disabledDates={disabledDates}
                  minDate={new Date()}
                  rangeColors={['#0089BF']}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <BookingSummary
        checkIn={checkIn}
        checkOut={checkOut}
        prices={prices}
        guests={guests}
      />
    </div>
  )
}

export default Booking

export const getStaticProps = async (context) => {
  const id = context.query.id
  const res = await Promise.all([
    fetch(`${process.env.API_URL}/properties/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      },
    }).then((res) => res.json()),
    fetch(`${process.env.API_URL}/reservations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      },
    }).then((res) => res.json()),
  ])
  const property = res[0]
  const reservations = res[1].filter(
    (reservation) => reservation.propertyId === id
  )

  const getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= moment(end).add(1, 'days').toDate();
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt))
    }
    return arr
  }
  const disabledDates = reservations
    .map((reservation) =>
      getDaysArray(reservation.startDate, reservation.endDate)
    )
    .flat()
  return {
    props: {
      query: JSON.stringify(context.query),
      property: JSON.stringify(property),
      disabledDates: JSON.stringify(disabledDates),
    },
  }
}
