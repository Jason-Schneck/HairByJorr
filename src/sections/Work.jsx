import { arrowRight } from "../assets/icons"
import { harlow } from "../assets/icons"
import Button from "../components/Button"


const Work = () => {
  return (
    <section id="work" className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        {/* Image */}
        <img
          src={harlow}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      {/* Text */}
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-periwinkle'>Harlow </span>
          Hair & Beauty
        </h2>
        <p className='mt-4 info-text'>
        I am currently interning at Harlow Hair & Beauty
         as I work towards my goal of becoming a full-time hairstylist
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        {/* Button */}
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Visit Website' />
        </div>
      </div>
      
    </section>
  )
}

export default Work