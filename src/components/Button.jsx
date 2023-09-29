import React from 'react'

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-periwinkle text-black font-montserrat border-white"
        } rounded-full ${fullWidth && 'w-full'}`}
      onClick={() => window.open("https://www.harlowhb.com/")}
    >
      {label}

    </button>
  )
}

export default Button