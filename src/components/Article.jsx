import curr from '../assets/images/image-currency.jpg';
import res from '../assets/images/image-restaurant.jpg';
import plane from '../assets/images/image-plane.jpg';
import confe from '../assets/images/image-confetti.jpg';

const Article = () => {
  return (
    // Flex Container
    <div className="container bg-white p-10 space-y-10">
        {/* Heading */}
        <h2 className='font-[500] text-2xl md:text-5xl'>Latest Article</h2>

        {/* Boxes */}
        <div className="article flex flex-col justify-between md:flex-row space-x-0 md:space-x-4 space-y-6 md:space-y-0">
            {/* Box One */}
            <div className='flex flex-col bg-lightGrayishBlue space-y-4'>
                <img src={curr} alt="" />
                <div className='space-y-3 p-2'>
                  <p className='text-sm'>By Claire Robinson</p>
                  <h2 className='text-[1.2rem] font-[500] text-left leading-5 hover:text-limeGreen cursor-pointer'>Receive money in any currency with no fee</h2>
                  <p className='text-sm'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single.</p>  
                </div>
            </div>

            {/* Box Two */}
            <div className='flex flex-col bg-lightGrayishBlue space-y-4'>
                <img src={res} alt="" />
                <div className='space-y-3 p-2'>
                  <p className='text-sm'>By Wilson Hutton</p>
                  <h2 className='text-[1.2rem] font-[500] text-left leading-5 hover:text-limeGreen cursor-pointer'>Treat yourself without worry about money</h2>
                  <p className='text-sm'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single.</p>  
                </div>
            </div>

            {/* Box Three */}
            <div className='flex flex-col bg-lightGrayishBlue space-y-4'>
                <img src={plane} alt="" />
                <div className='space-y-3 p-2'>
                  <p className='text-sm'>By Codeboyfriend</p>
                  <h2 className='text-[1.2rem] font-[500] text-left leading-5 hover:text-limeGreen cursor-pointer'>Take your Easybank card wherever you go</h2>
                  <p className='text-sm'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single.</p>  
                </div>
            </div>

            {/* Box Four */}
            <div className='flex flex-col bg-lightGrayishBlue space-y-4'>
                <img src={confe} alt="" />
                <div className='space-y-3 p-2'>
                  <p className='text-sm'>By Mking</p>
                  <h2 className='text-[1.2rem] font-[500] text-left leading-5 hover:text-limeGreen cursor-pointer'>Our invite only Beta accounts are now live</h2>
                  <p className='text-sm'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single.</p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article