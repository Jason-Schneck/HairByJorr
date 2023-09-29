import { shieldTick, support } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

// Nav Links
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#designs", label: "Designs" },
    { href: "#styles", label: "Styles" },
    { href: "#work", label: "Work" },
];

// Hair/Shoes
export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

// Statistics
export const statistics = [
    { value: '50+', label: 'Clients' },
    { value: 'W,Th ,F', label: 'Days Available' },
    { value: '104', label: 'Section' },
];

// Products
export const products = [
    {
        imgURL: shoe4,
        name: "Brown Balayage",
        price: "$55",
    },
    {
        imgURL: shoe5,
        name: "Full Highlight",
        price: "$55",
    },
    {
        imgURL: shoe6,
        name: "Full Highlight",
        price: "$55",
    },
    {
        imgURL: shoe7,
        name: "Double Process",
        price: "$55",
    },
];

// Services
export const services = [
    {
        imgURL: shieldTick,
        label: "Trustworthy",
        subtext: "Enjoy hassle-free appointments and exceptional hair services."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "I am committed to assisting you in achieving your hair aspirations."
    },
];

// Footer Links
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Brown Balayage", link: "#designs" },
            { name: "Full Highlight", link: "#designs" },
            { name: "Full Highlight (Blonde)", link: "#designs" },
            { name: "Double Processor - Purple Balayage", link: "#designs" },
        ],
    },
    {
        title: "Work",
        links: [
            { name: "Harlow Hair & Beauty", link: "#work" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "jordan12012@icloud.com", link: "" },
        ],
    },
];