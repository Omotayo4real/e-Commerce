export const menuLinks = [
    {
        id: '1',
        name: 'Home',
        href: '#'
    },
    {
        id: '2',
        name: 'Shop',
        href: '#shop'
    },
    {
        id: '3',
        name: 'About',
        href: '#about'
    },
    {
        id: '4',
        name: 'Blogs',
        href: '#blogs'
    }
]

export const dropdownLinks = [
    {
        id: 1,
        name:'Trending Products',
        link: '/#'
    },
    {
        id: 2,
        name:'Best Selling',
        link: '/#'
    },
    {
        id: 3,
        name:'Top Rated',
        link: '/#'
    }
]

import image1 from '../assets/hero/headphone.png';
import image2 from '../assets/category/vr.png';
import image3 from '../assets/category/macbook.png'
export const heroData = [
    {
      id: 1,
      img: image1,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Headphones',
    },
    {
      id: 2,
      img: image2,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Virtual',
    },
    {
      id: 3,
      img: image3,
      subtitle: 'Beats Solo',
      title:'Branded',
      title2: 'Laptops',
    }
  ]
  import { FaCarSide, FaCheckCircle, FaWallet, FaHeadphonesAlt } from 'react-icons/fa';

  export const serviceData = [
    {
      id: 1,
      icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
      title: "Free Shipping",
      description: "Free Shipping On All Orders"
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shipping",
        description: "Free Shipping On All Orders"
    },
    {
        id: 1,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shipping",
        description: "Free Shipping On All Orders"
    },
    {
        id: 1,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shipping",
        description: "Free Shipping On All Orders"
    }
  ]

  import photo1 from "../assets/product/p-1.jpg";
  import photo2 from "../assets/product/p-2.jpg";
  import photo3 from "../assets/product/p-3.jpg";
  import photo4 from "../assets/product/p-4.jpg";
  import photo5 from "../assets/product/p-5.jpg";
  import photo6 from "../assets/product/p-7.jpg";
  import photo7 from "../assets/product/p-9.jpg";
  import photo8 from "../assets/product/p-1.jpg";

 
  

export const productData = [
    {
        id: 1,
        img: photo1,
        title: "Boat Headphones",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: photo2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200"
    },
    {
        id: 3,
        img: photo3,
        title: "Goggles",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 4,
        img: photo4,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
     {
        id: 5,
        img: photo5,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
     {
        id: 6,
        img: photo6,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
     {
        id: 7,
        img: photo7,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
     {
        id: 8,
        img: photo8,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    }
]

import img1 from "../assets/blogs/blog-1.jpg"
import img2 from "../assets/blogs/blog-2.jpg"
import img3 from "../assets/blogs/blog-3.jpg"
export const blogData = [
    {
        title: "How to choose perfect smart watch",
        subtitle: "minima facere deserunt vero illo beatea deliniti euis dolores consequuuuntium eligende corporis maiores molestea landantum. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image: img1,
        aosDelay: "0"
    },
    {
        title: "How to choose perfect gadget",
        subtitle: "minima facere deserunt vero illo beatea deliniti euis dolores consequuuuntium eligende corporis maiores molestea landantum. Porro?",
        published: "Jan 20, 2024 by Satya",
        image: img2,
        aosDelay: "200"
    },
    {
        title: "How to choose perfect VR headset",
        subtitle: "minima facere deserunt vero illo beatea deliniti euis dolores consequuuuntium eligende corporis maiores molestea landantum. Porro?",
        published: "Jan 20, 2024 by Sahir",
        image: img3,
        aosDelay: "400"
    }
]

export const footerLinks = [
    {
        title: "Home",
        link: "#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blogs"
    }
]