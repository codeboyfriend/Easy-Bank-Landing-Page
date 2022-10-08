import Logo from './../../assets/images/logo.svg';
import Ham from './../../assets/images/icon-hamburger.svg';

const Navbar = () => {
  return (
    <div className="navbar container top-0 absolute zIndex-[1000] bg-white p-4">
      <div className='flex items-center justify-between'>
          {/* Logo */}
        <div className="md:w-1/3">
          <img src={ Logo } alt="" />
        </div>

          {/* Link */}
        <div className='hidden flex-row items-center text-grayishBlue text-sm justify-between space-x-6 md:w-1/3 md:flex'>
          <a href="#" className='hover:text-darkBlue'>Home</a>
          <a href="#" className='hover:text-darkBlue'>About</a>
          <a href="#" className='hover:text-darkBlue'>Contact</a>
          <a href="#" className='hover:text-darkBlue'>Blogs</a>
          <a href="#" className='hover:text-darkBlue'>Careers</a>
        </div>

          {/* Button */}
          <a href="#" className='btn hidden md:block bg-limeGreen px-4 py-2 rounded-full text-white'> Request Invite</a>

          <div className="md:hidden">
          <img src={ Ham } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar