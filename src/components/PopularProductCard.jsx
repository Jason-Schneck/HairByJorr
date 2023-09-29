import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      {/* Hair Images */}
        <img
            src={imgURL}
            alt={name}
            className='w-[280px] h-[280px] rounded-3xl'
        />
        {/* Star Rating */}
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">5</p>
        </div>
        {/* Name and Price */}
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-periwinkle text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard