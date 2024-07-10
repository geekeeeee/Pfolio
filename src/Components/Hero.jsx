import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'
import './waves.css'
import {ReactComponent as Waves} from "./wavy.svg"
import '../App.css' 

const Typer = () => {
  
  return (
    <div className='flex flex-col poppins'>
      
      <h3 className='pt-4 pl-1 text-2xl'>Hi, I'm Abijith</h3>
      <h1 className='text-5xl '>
        I'm a{' '}
        <span className='font-extrabold text-5xl text-green-400' >
        <Typewriter
              words={['Frontend Developer', 'Web Designer', 'Problem Solver', 'Leetcoder']}
              loop={Infinity}
              cursor
              cursorStyle='_'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </span>
      </h1>
    </div>
    
  );
}

const Hero = () => {
  return (
    <>
    <div className="w-[90vw] h-[90vh]
    bg-slate-800 border border-green-400 border-1 my-5 mx-auto rounded-lg p-10 grid grid-rows-3 lg:grid-cols-5 sm:grid-cols-4 gap-2 overflow-hidden relative">
      <div  className="row-start-2 col-start-1 col-span-3"><Typer/></div> 
      <Waves className="absolute top-0  left-[-20vw]"/>
    </div>

    </>
  );
}

export default Hero
