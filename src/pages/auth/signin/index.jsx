import React from 'react'
import SheikhAvatar from '/assets/sheikh-avatar.webp'
import { Input } from '@heroui/input'
import CustomButton from '../../../components/button/button'
import { Button } from '@heroui/button'
import PurpleShade from '/assets/Ellipse1.png'
import RedShade from '/assets/Ellipse2.png'

/* Ellipse 10 */



const SignIn = () => {
  return (
    <div className='relative h-screen overflow-hidden bg-primary-black'>
           <div className='w-full h-[1px] absolute top-[30px] bg-primary-white-20 z-20 right-0'/>
        <div class="after:absolute after:inset-0 after:bg-no-repeat after:bg-cover after:content-[''] after:bg-[url('/assets/backgroundimages/background-image.png')]">
        {/* <div className='w-[872px] h-[872px] top-[300px] bg-primary-purple-shade blur-[250px] absolute -left-[330px] z-1' /> */}
        <img src={PurpleShade} alt={PurpleShade} className='absolute bottom-0 inset-0 w-[872px] h-[972px] z-10' />
        <img src={RedShade} alt={RedShade} className='absolute  w-[872px] h-[972px] z-10 right-0' />
        {/* <div className='w-[972px] h-[872px] top-[300px] bg-primary-red blur-[250px] absolute -right-[330px] ' /> */}
   <div className="container z-20 relative">
    <div className='w-[1px] h-full absolute top-[20px] bg-primary-white-20 z-20'/>
    <div className='w-[1px] h-full absolute top-[20px] bg-primary-white-20 z-20 right-0'/>
 
   <div className='flex '>
        <div className='w-1/2 relative pt-[160px] z-10'>
       <img src={SheikhAvatar} alt="Sheikh" className='w-full h-full ' />
       
        </div>
        <div className='w-1/2 relative mt-[156px] z-10 flex items-center flex-col'>
        <div className=''>
        <h1 className='font-clash-display font-semibold text-white text-[40px]'>Welcome Back to Your Directory AI!</h1>
        <p className='font-montserrat font-medium text-[17px] text-primary-white-50 text-center'>Your AI-powered toolkit is just a click away.</p>
        </div>
        <div className='relative p-[3px] mt-[27px] mt-[105px]  bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-xl my-4 shadow-[0px_14px_29px_2px_rgba(151,71,255,0.2)]'>
        <form className='bg-bg-dark-purple w-[400px]  p-[28px]  rounded-lg '>

        
          <div className='my-4'>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md text-white placeholder:text-center"
              style={{ backgroundColor: '#252343' }}
            />
          </div>

          <div className='my-4'>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-white placeholder:text-center"
              style={{ backgroundColor: '#252343' }}
            />
          </div >

          <div className='my-4 text-center w-full'>
           <span className='font-montserrat text-md underline font-medium text-center text-white'>Forgot Password?</span>
          </div>
          <div className='mt-6 mb-4'>
          <Button size='lg' className='font-montserrat text-md w-full rounded-md font-medium bg-white'>Sign In and Explore AI Tools</Button>
          </div>

        </form>
        </div>

        <div className='mt-[32px]'>
            <Button size='lg' className='w-[370px] font-montserrat text-md  rounded-md font-medium bg-inherit border text-white'>New to Your Directory AI? Create Account</Button>
        </div>
        </div>
        
   </div>
   </div>
  </div>
    </div>
  )
}

export default SignIn