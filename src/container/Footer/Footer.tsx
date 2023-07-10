import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
function Footer() {
  // const [formData, setFormData ] = useState<{ name: string; email: string; message: string; }>({ name: '', email: '', message: '', });
  // const [isFormSubmitted, setIsFormSubmitted ] = useState<boolean>(false);
  // const [loading, setLoading ] = useState<boolean>(false);

  // const { name, email, message } = formData;

  // const handleChangeInput = (e:any) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  //   console.log(formData);
    

  // }

  // const handleSubmit = function(){
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name,
  //     email,
  //     message,
  //   };

  //   client.create(contact)
  //   .then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   })
  // }
  
  return (
    <>
      <h2 className='head-text'><span>Hit me up! 👇 </span>let's chat!</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:umichaeledet003@gmail.com" className='p-text'>umichaeledet003@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+2349134909366" className='p-text'>+2349134909366</a>
        </div>
      </div>

      {/* {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" className='p-text' placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
          <input type="email" className='p-text' placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
        </div>
        <div>
          <textarea name='message' cols={30} rows={10} className='p-text' placeholder='Your Message' value={message}
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
      </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch with me!</h3>
        </div>
      )} */}
    </>
  )
}


export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');