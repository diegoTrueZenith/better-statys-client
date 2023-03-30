import { FaEnvelope, FaCog, FaPhoneAlt } from 'react-icons/fa'

function ContactUs() {
  const mailTo = () => {
    const email = 'example@example.com';
    window.location.href = `mailto:${email}`;
  };
  function callTo() {
    const phoneNumber = '1234567890';
    window.location.href = `tel:${phoneNumber}`;
  }


  return (
    <div className="wrapper-information">
      <div className="contact-information">
        <div className="information__title">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, please don’t hesitate to contact us! We’d be more than happy to assist you as soon as we can!
          </p>
        </div>
        <div className="form-contact-content">
          Please leave your details and message below.
          <div className="information__contact">
            <form id="contactus">
              <label>
                Name:
                <input className='contact__input' type="text" name="Name" />
              </label>
              <div className="information__contact--email">
                <label for="Email">
                  Email:
                  <input className='contact__input' type="text" name="Email" />
                </label>
                <label for="PhoneNumber">
                  Phone Number:
                  <input className='contact__input' type="text" name="PhoneNumber" />
                </label>
              </div>
              Message:
              <textarea type="text" name="Message" rows={5} />
              <input
                type="submit"
                value="Submit"
                className="submit-contactus"
              />
            </form>
          </div>
        </div>
      </div>
      <div className='ways-of-contact'>
        <h2> We&aposre Here For You</h2>
        <p> We truly believe in exceptional service. If you need help right away, please don’t hesitate to reach out to us via these alternate methods </p>
        <div className="grid-buttons">
          <div className='right'>
            <button onClick={mailTo}> 
              <FaEnvelope className="icon" style={{ size: '24', color: '#4FD1C5' }} />
              example@gmail.com
            </button>
          </div>
          <div className='left'>
            <button onClick={()=>window.location.href = '/support'}>
              <FaCog className="icon" style={{ size: '24', color: '#4FD1C5' }} />
              Support
            </button>
          </div>
          <div className='right'>
            <button onClick={callTo}>
              <FaPhoneAlt  className="icon" style={{ size: '24', color: '#4FD1C5' }} />
              +1 (123) 123 1234
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
