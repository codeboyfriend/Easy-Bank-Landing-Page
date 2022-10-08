import online from '../assets/images/icon-online.svg';
import budget from '../assets/images/icon-budgeting.svg';
import onboard from '../assets/images/icon-onboarding.svg';
import api from '../assets/images/icon-api.svg';

const Section = () => {
  return (
    // Flex Container
    <div className="container bg-lightGrayishBlue p-10 p-y-12 flex flex-col space-y-20">
        {/* Left Container */}
        <div className='space-y-8 text-center md:text-left'>
            <h2 className='font-[500] text-2xl md:text-5xl'>Why choose Easybank?</h2>
            <p className='text-sm'>We leverage Open Bank to turn your bank account into your financial hub. <br/>
            Control your financies linke never before.
            </p>
        </div>
        
        {/* Right Container */}
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row space-y-8 space-x-0 md:space-x-6 md:space-y-6 ">
            {/* Box One */}
            <div className="flex flex-col items-center md:w-1/4 md:items-start space-y-3 md:space-y-5">
                <div>
                  <img src={online} alt="" />
                </div>
                <h2 className='text-[1.2rem] font-[500] text-center md:text-left'>Online Banking</h2>
                <p className='text-sm text-center md:text-left'>Our modern web and mobile applications allow you to keep track of your financies wherever you are in the world.</p>
            </div>

            {/* Box One */}
            <div className="flex flex-col items-center md:w-1/4 md:items-start space-y-3 md:space-y-5">
                <div>
                  <img src={budget} alt="" />
                </div>
                <h2 className='text-[1.2rem] font-[500] text-center md:text-left'>Simple Budgeting</h2>
                <p className='text-sm text-center md:text-left'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
            </div>
            
            {/* Box One */}
            <div className="flex flex-col items-center md:w-1/4 md:items-start space-y-3 md:space-y-5">
                <div>
                  <img src={onboard} alt="" />
                </div>
                <h2 className='text-[1.2rem] font-[500] text-center md:text-left'>Fast Onboarding</h2>
                <p className='text-sm text-center md:text-left'>We don't do braches. Open your account in minutes online and start taking control of your financies right away.</p>
            </div>

            {/* Box One */}
            <div className="flex flex-col items-center md:w-1/4 md:items-start space-y-3 md:space-y-5">
                <div>
                  <img src={api} alt="" />
                </div>
                <h2 className='text-[1.2rem] font-[500] text-center md:text-left'>Open API</h2>
                <p className='text-sm text-center md:text-left'>Manage your savings, investments, pension, and much more from one account. tracking your has never been easier.</p>
            </div>
        </div>
    </div>
  )
}

export default Section