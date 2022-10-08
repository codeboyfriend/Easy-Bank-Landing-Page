import img from '../../assets/images/logo.svg';
import face from '../../assets/images/icon-facebook.svg';
import youtube from '../../assets/images/icon-youtube.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import instagram from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    // Flex Container
    <div className='container flex flex-col md:flex-row space-y-10 bg-darkBlue justify-between p-10 space-y-6 md:space-y-0'>
      {/* Box */}
        <div className="flex flex-col items-center justify-between">
          <img className='mb-6 md:mb-0' src={img} alt="" />

          <div className="flex flex-row">
            <img src={face} className='mr-4' alt="" />
            <img src={youtube} className='mr-4' alt="" />
            <img src={twitter} className='mr-4' alt="" />
            <img src={pinterest} className='mr-4' alt="" />
            <img src={instagram} className='mr-4' alt="" />
          </div>
        </div>

        {/* Box */}
          <div className="flex flex-col text-center md:text-left  space-y-2 md:space-y-4">
            <a href="#" className='text-white hover:text-limeGreen'>About Us</a>
            <a href="#" className='text-white hover:text-limeGreen'>Contact</a>
            <a href="#" className='text-white hover:text-limeGreen'>Blog</a>
          </div>

          <div className="flex flex-col text-center md:text-left  space-y-2 md:space-y-4">
            <a href="#" className='text-white hover:text-limeGreen'>Career</a>
            <a href="#" className='text-white hover:text-limeGreen'>Support</a>
            <a href="#" className='text-white hover:text-limeGreen'>Privacy Policy</a>
          </div>

        <div className="flex flex-col items-center md:items-left justify-between md:h-2xl">
          {/* Button */}
          <a href="#" className='btn bg-limeGreen px-4 py-2 rounded-full text-white mb-6 md:mb-0'> Request Invite</a>
          <p className='text-white text-sm'>&copy; Easybank. All Right Reserved</p>
        </div>
        </div>
  )
}

export default Footer