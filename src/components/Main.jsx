import React from 'react'

const Main = () => {
  return (
    <>
    
  <main className="flex h-screen flex-col py-12 justify-around overflow-x-hidden bg-fixed">
    <div className="marquee mt-20 w-full border-sky-400">
      <span className="whitespace-nowrap text-center text-7xl uppercase text-[#1A1C20]">Modern Web Development Modern Web Development Modern Web Development Modern Web Development</span>
      <br />
      <span className="marquee2 whitespace-nowrap text-center text-7xl uppercase text-[#1A1C20]">Developer Full-stack Web Developer Full-stack Web Developer Full-stack Web Full-stack Web Full-stack Web</span>
    </div>
  
    <article className="flex flex-col gap-4 border-sky-500 px-4 sm:px-6 lg:px-12 2xl:text-2xl lg:w-2/4">
      <p>Hello There! My name is Hamad Ali. I am proficient in the MERN stack, with a strong focus on React, JavaScript, and Python.</p>
      <p>I excel at crafting web applications and using technologies to create user-friendly and innovative solutions.</p>
  
      <button className="my-1 w-fit border-2 border-[#DBD7D2] px-8 py-2 uppercase transition-all duration-1000 hover:border-black hover:bg-white hover:text-black">
        <a target='_blank' href="https://drive.google.com/file/d/13dD6AhPrOfsReadM8Et76B0p_8W24FUj/view?usp=sharing">Resume</a>
      </button>
    </article>
  </main>
  <p className="-mt-1 border-b-[1px] border-gray-800 opacity-70"></p>
    </>
  )
}

export default Main