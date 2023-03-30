import { FaEnvelope, FaCog, FaPhoneAlt } from 'react-icons/fa'

function ContactForm() {
  return (
    <div className="wrapper-information">
      <div className="contact-information">
        <div className="information__title">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            amet consectetur adipisicing elit. Similique. Lorem ipsum dolor sit
            amet consectetur
          </p>
        </div>
        <div className="form-contact-content">
          Lorem ipsum dolor sit amet consectetur.
          <div className="information__contact">
            <form id="contactus">
              <label>
                Name:
                <input type="text" name="Name" />
              </label>
              <div className="information__contact--email">
                <label for="Email">
                  Email:
                  <input type="text" name="Email" />
                </label>
                <label for="PhoneNumber">
                  Phone Number:
                  <input type="text" name="PhoneNumber" />
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
      <div className="information-2nd--full-section">
        <div className="page-container">
          <div className="contact-information--2ndsection__title">
            <div className="contact_wrapper-content">
              <span>Were Here for you</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique amet consectetur adipisicing elit. Similique. Lorem
                ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="buttons__container">
              <div className="contact_mail--wrapper--button">
                <button className="button-contact-email">
                  <FaEnvelope style={{ size: '24', color: '#4FD1C5' }} />
                  <a href="#">example@gmail.com</a>
                </button>
              </div>
              <div className="contact_support--wrapper--button">
                <button className="button-contact-email">
                  <FaCog style={{ size: '24', color: '#4FD1C5' }} />
                  <a href="#">Support</a>
                </button>
              </div>
              <div className="contact_phone-wrapper--button">
                <div className="elipse"></div>
                <button className="button-contact-email">
                  <FaPhoneAlt style={{ size: '24', color: '#4FD1C5' }} />

                  <a href="#">1 (123) 123 1234 </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
