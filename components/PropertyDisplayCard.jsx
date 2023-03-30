import Link from 'next/link'
import Image from 'next/image'
import { FaShower, FaBed, FaRulerCombined, FaMapMarkedAlt} from 'react-icons/fa'
import Rating from './Rating'

function PropertyDisplayCard(props) {
  // const { imagesrc, price, dynamictext, bed, shower, meters } = props
  const { price="$100", dynamictext="Testing", bed="2", shower="2", meters="100", imagesrc="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669660966/r-architecture-WQCkior21Gc-unsplash_1_l3zgel.jpg" } = props;
  return (
    <div className="house">
      <Link href={'/'}>
        <div className="house__image-wrapper">
          <Image
            className="house__image"
            src={imagesrc}
            alt="house"
            width="338"
            height="229"
          />
          <Rating rating={Rating} />
          <div className="house__dynamic__text">
            <p> {dynamictext} </p>
          </div>
        </div>
      </Link>
      <div className="house__details">
        <div className="house__price">
          <p>{price}</p>
          <p>Departament for single family</p>
        </div>
        <div className="house__amenities">
          <div className="house__amenities__item">
            <FaBed size={24} />
            <span>{bed}</span>
          </div>
          <div className="house__amenities__item">
            <FaShower size={24} />
            <span>{shower}</span>
          </div>
          <div className="house__amenities__item">
            <FaRulerCombined size={24} />
            <span>{meters}</span>
          </div>
        </div>
      </div>
      <div className="house__buttons-container">
        <button className="house__button">Book Now</button>
        <button className="house__map__button">
          <FaMapMarkedAlt size={20} />
        </button>
      </div>
    </div>
  )
}
export default PropertyDisplayCard
