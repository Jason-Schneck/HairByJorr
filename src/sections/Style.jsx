import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const Style = () => {
  return (
    <section
      id="styles"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* Bold Header */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Bringing you an Array of
          <span className="text-periwinkle"> Exciting </span> And
          <span className="text-periwinkle"> Trendy</span> Styles
        </h2>
        {/* Description Text */}
        <p className="mt-4 lg:max-w-lg info-text">
          Delivering an exquisite premium experience, meticulously crafting
          your hair to elevate your style, and offering unparalleled quality,
          innovation, and a dash of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">My dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center sm:w-[300px]">
        <img
          src={shoe8}
          alt="shoe8"
          width={470}
          height={422}
          className="object-contain rounded-3xl"
        />
      </div>

    </section>
  )
}

export default Style