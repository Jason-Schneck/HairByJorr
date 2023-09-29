import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    // Change the Image
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    // Creates Border on Image Clicked/Big
    <div className={`${bigShoeImg === imgURL.bigShoe ? 'border-periwinkle rounded-lg' : 'border-transparent'
    } cursor-pointer max-sm:flex-1 border-2`}
    onClick={handleClick}
    >
        {/* Rest of Images */}
        <div className='flex justify-center items-center sm:w-40 bg-hero sm:h-40 max-sm:p-4'>
            <img 
                src={imgURL.bigShoe}
                alt="shoe collection"
                width={120}
                height={103}
                className='object-contain rounded-3xl' 
            />
        </div>
    </div>
  )
}

export default ShoeCard