import { useReducer, useState, useRef, useEffect, useCallback } from 'react'
import { DateRange } from 'react-date-range'
import { FaPlus, FaMinus, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import moment from 'moment'
import Turnstone from 'turnstone'

import { useRouter } from 'next/router'
const MAX_GUESTS = 16

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PLACE':
      return { ...state, place: action.payload }
    case 'INCREMENT_GUESTS':
      return {
        ...state,
        guests: state.guests < MAX_GUESTS ? state.guests + 1 : MAX_GUESTS,
      }
    case 'DECREMENT_GUESTS':
      return { ...state, guests: state.guests > 1 ? state.guests - 1 : 1 }
    case 'SET_CHECK_IN':
      return { ...state, checkIn: action.payload }
    case 'SET_CHECK_OUT':
      return { ...state, checkOut: action.payload }
  }
}

const listbox = {
  displayField: 'name',
  data: [
    {
      id: 0,
      name: 'Chicago, IL',
    },
    {
      id: 1,
      name: 'Rockford, IL',
    },
  ],
  searchType: 'contains',
}

function ReservationFinder() {
  const [state, dispatch] = useReducer(reducer, {
    place: '',
    guests: 1,
    checkIn: '',
    checkOut: '',
  })

  // Calendar
  const wrapperRef = useRef(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectionRange, setSelectionRange] = useState({
    startDate: null,
    endDate: new Date(''),
    key: 'selection',
  })

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

  const handleRangeFocusChange = (ranges) => {
    if (ranges.reduce((acc, range) => acc + range, 0) === 0) {
      setShowCalendar(false)
    }
  }

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection)
    dispatch({ type: 'SET_CHECK_IN', payload: ranges.selection.startDate })
    dispatch({ type: 'SET_CHECK_OUT', payload: ranges.selection.endDate })
  }


  // Turnstone
  const handlePlaceSelection = useCallback((selectedItem, displayField) => {
    console.log(selectedItem, displayField)
    if (selectedItem) {
      dispatch({ type: 'SET_PLACE', payload: selectedItem[displayField] })
    }
  },[])


  const router = useRouter()
  const handleSubmit = (e) => {
    console.log(state)
    router.push(`/rentals?place=${state.place}&guests=${state.guests}&checkIn=${state.checkIn.toJSON()}&checkOut=${state.checkOut.toJSON()}`)
  }
  

  return (
    <div className="rf">
      <div className="rf__input-wrapper--shrink" style={{gridArea: "place", zIndex: "2"}}>
        <span className="rf__input__label">Place</span>
        <Turnstone
          id="autocomplete"
          placeholder="Enter destination..."
          listbox={listbox}
          defaultListbox={listbox}
          clearButton={true}
          matchText={true}
          onSelect={handlePlaceSelection}
          noItemsMessage="No place found"
          Clear={() => <FaPlus style={{ transform: 'rotate(45deg)' }} />}
          styles={{
            container: 'rf__search__container',
            input: 'rf__search__input',
            listbox: 'rf__search__listbox',
            item: 'rf__search__item',
            highlightedItem: 'rf__search__highlightedItem',
            clearButton: 'rf__icon-button rf__search__clearButton',
          }}
        />
      </div>

      <div className="rf__input-wrapper--shrink" style={{gridArea: "guests"}}>
        <span className="rf__input__label">Guests</span>
        <div className="rf__guests">
          <div className="rf__input__value">{`${state.guests} ${
            state.guests > 1 ? 'guests' : 'guest'
          }`}</div>
          <div className="rf__guests__buttons">
            <button
              className="rf__icon-button"
              onClick={() => dispatch({ type: 'DECREMENT_GUESTS' })}
            >
              <FaMinus />
            </button>
            <button
              className="rf__icon-button"
              onClick={() => dispatch({ type: 'INCREMENT_GUESTS' })}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <div className="rf__input-wrapper" style={{gridArea: "date"}}>
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
          <div ref={wrapperRef}className="rf__date-range">
            <DateRange
              onRangeFocusChange={handleRangeFocusChange}
              
              onChange={handleSelect}
              showSelectionPreview={true}
              showDateDisplay={false}
              moveRangeOnFirstSelection={false}
              ranges={[selectionRange]}
              direction="horizontal"
              disabledDates={[new Date()]}
              rangeColors={['#0089BF']}
            />
          </div>
        )}
      </div>
      <div className="rf__submit-button">
        <button
          className="button--primary button--animated"
          onClick={handleSubmit}
        >
          Search stays <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ReservationFinder
