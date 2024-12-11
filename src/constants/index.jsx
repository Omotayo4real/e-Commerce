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

import image1 from '../assets/mainheadset.png';
import image2 from '../assets/virtual2.png';
import image3 from '../assets/laptop2.jpg'

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

 