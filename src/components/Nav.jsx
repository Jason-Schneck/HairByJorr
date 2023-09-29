import { sheers } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {

    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    return (

        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className='flex justify-between items-center max-container'>
                {/* Sheers Icon */}
                <a href="/">
                    <img
                        src={sheers}
                        alt="Logo"
                        width={100}
                        height={29}
                    />
                </a>

                {/* Nav Bar */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden pl-10'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray
                               hover:bg-periwinkle hover:text-white rounded-md px-3 py-2'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger - Only Appears on Small Devices */}
                <div className='hidden max-lg:block'>
                    <button
                        type="button"
                        onClick={handleMenu}
                    >
                        <img
                            src={hamburger}
                            alt="Hamburger"
                            width={25}
                            height={25}
                        />
                    </button>

                    {/* Hamburger Opened */}
                    {open ? (
                        <div className="hidden max-lg:block">
                            <div className="absolute right-2 rounded-md">
                                {navLinks.map((link, index) => (
                                    <a key={index} href={link.href}
                                        className=" text-gray-500
                                         mb-[-11px] mt-[0.9px]
                                          hover:bg-periwinkle hover:text-white 
                                          px-3 py-2 rounded-md 
                                          text-base font-palanquin max-lg:inline-block"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : null}

                </div>
            </nav>
        </header>
    )
}

export default Nav