import React from 'react'
import pfp from '/pfp.png'
import cart from '/cart.png'
import res from '/res.png'

const Header = ({dispatch}) => {
  return (
    <div className='w-[85%] border-b border-b-[#E4E9F2] flex h-[110px] items-center'>
      <div className='flex gap-[20px]'>
      <button onClick={()=> dispatch({type: "opennavbar"})} className='hidden max-lg:block mt-[7px]'>
          <img src={res} alt="" />
        </button>
        <p className='w-[137px] text-[#1D2026] font-[700] text-[25px]'>sneakers</p>
      </div>
        <div className='flex items-center justify-between w-full ml-[50px] max-lg:justify-end max-md:ml-[20px]'>
            <ul className='flex font-normal text-[15px] text-[#69707D] gap-[30px] h-[110px] max-lg:hidden'>
                <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer hover:text-[#1D2026]'>Collections</li>
                <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Men</li>
                <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Women</li>
                <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>About</li>
                <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Contact</li>
            </ul>   

            <div className='flex items-center gap-[50px]'>
                <button onClick={()=> dispatch({type: "changeCartModal"})}>
                  <img className=' cursor-pointer ' src={cart} alt="" />
                </button>

                <img className='w-[50px] h-[50px] hover:border-[2px] rounded-[50%] border-[#FF7E1B] cursor-pointer' src={pfp} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header