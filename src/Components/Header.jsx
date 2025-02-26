import React from 'react'
import logo from'../assets/Facebook.png'
import user from'../assets/user.jpeg'
import {  FiSearch } from "react-icons/fi";
import {  FiHome } from "react-icons/fi";
import {  FiFlag } from "react-icons/fi";
import {  FiVideo} from "react-icons/fi";
import {  FiShoppingBag } from "react-icons/fi";
import {  FiUsers } from "react-icons/fi";
import { FiMenu, FiMessageSquare, FiBell, FiArrowDown } from "react-icons/fi";

const Header = () => {
  return (
    <div className=' relative flex justify-between items-center  px-[2rem] py-3 w-full bg-white shadow-2xl '>
      

      {/* // Start Of Left Side */}

      <div className=" flex space-x-3 items-center">
        
        <img className='w-[40px] h-[40px] ' src={logo}  alt='facebook logo'/>
        <input className='w-[200px] h-[40px] bg-gray-100 rounded-md pl-[3rem] ' type="text" placeholder='Serach Facebook' />
        <div className="  absolute left-[5.5rem] ">
        <  FiSearch size={30} color='gray'/>
        </div>
        
        
      </div>

      {/* // End Of Left Side */}
        

      {/* // Start Center Navigation */}
      <div className=" flex items-center space-x-13">
        <a href='#' className='  hover:border-b-2 hover:border-blue-600 py-2 px-2'> <FiHome size={25} color='blue'/></a>
        <a href='#' className='  hover:border-b-2 hover:border-blue-600 py-2 px-2'>  <FiUsers size={25}/></a>
        <a href='#' className='  hover:border-b-2 hover:border-blue-600 py-2 px-2'>  <FiVideo size={25}/></a>
        <a href='#' className='  hover:border-b-2 hover:border-blue-600 py-2 px-2'> <FiShoppingBag size={25}/></a>
        
       
        
         
        
      
         </div>

      
        {/* // End Center Navigation */}

        {/* /// Start Right Side */}

      <div className=" flex items-center space-x-4">
        
      

        <div className="flex items-center space-x-3">
           
           <span className=' bg-gray-200 rounded-[50%] py-3 px-3 '> <FiMenu/></span>
           <span className=' bg-gray-200 rounded-[50%] py-3 px-3 '> <FiMessageSquare/></span>
           <span className=' bg-gray-200 rounded-[50%] py-3 px-3 '><FiBell/>  </span>
           


        </div>

        <div className="flex items-center space-x-2">
          <img className=' rounded-[50%] w-[40px] h-[40px] ' src={user} alt='user image' />
          {/* <h1 className=' font-semibold  '>Sumayo Axmad</h1> */}
        </div>
        
      </div>

         {/* /// Start Right Side */}

    </div>
  )
}

export default Header
