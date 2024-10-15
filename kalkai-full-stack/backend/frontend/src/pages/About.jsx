import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Kalkai Furnitures & Electronics, we are passionate about offering the best in electronics and furniture to enhance the way people live and work. Our journey began with the vision of creating a seamless shopping experience, where customers can explore high-quality products from top brands, all in one place.</p>
          <p>Whether you're looking for the latest in home electronics, modern furniture for your living space, or innovative solutions for your office, we are here to help. Our carefully curated selection ensures that we cater to all your needs, combining function with style and cutting-edge technology.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver top-notch products that transform homes and workplaces, all while providing unparalleled convenience. From browsing to delivery, we are committed to ensuring that every customer enjoys a hassle-free shopping experience with the utmost confidence.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We work closely with trusted suppliers and brands to offer only the highest-quality electronics and furniture. Each product undergoes thorough checks to meet our rigorous standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Our platform is designed for ease of use, allowing you to explore and purchase products effortlessly from the comfort of your home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated team is always ready to assist you with any inquiries, ensuring that your shopping experience is smooth and satisfying from start to finish.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
