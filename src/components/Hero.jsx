import BG from '../assets/images/bg-intro-desktop.svg';
import BGM from '../assets/images/bg-intro-mobile.svg';
import MockUp from '../assets/images/image-mockups.png';

const Hero = () => {
  return (
    // Flex Container
    <div className='container flex flex-col-reverse bg-veryLightGray md:flex-row items-center p-6' >
        {/* Left Div */}
        <div className='space-y-6 text-center pt-[2rem] md:w-1/2 md:text-left'>
            <h2 className='max-w-md font-[500] text-3xl md:text-5xl'>Next generation digital banking</h2>
            <p className='text-sm'>Take your finicial life online. Your Easybank account will be a one step shop for spending, saving, bugeting, investing, and much more.</p>
            <button className="btn bg-limeGreen px-4 py-2 rounded-full text-white">Request Invite</button>
        </div>

        {/* Right */}
        <div className='md:w-1/2 relative'>
            <img src={BG} className='hidden md:block' alt="" />
            <img className='hidden md:block absolute top-0' src={MockUp} alt="" />
        </div>

        <div className='md:hidden relative'>
            <img src={BGM} className='md:hidden' alt="" />
            <img className='md:hidden absolute top-0' src={MockUp} alt="" />
        </div>
    </div>
  )
}

export default Hero