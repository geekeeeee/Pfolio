import React, { useEffect } from 'react'
import { motion, useAnimate } from "framer-motion"
  // const handleAnimate= async() => {
  //   await animate("#target", {
  //       x:150
  //   },{ duration: 0.25 });
  //   await animate("#target", {
  //       y:150, rotate: "360deg",
  //       borderRadius: "50px"
  //   }, { duration: 0.5 });
  //   await animate("#target", {
  //       x:-150
  //   }, { duration: 0.25 });
  //   await animate("#target", {
  //       y:0, rotate: "0deg",
  //       borderRadius: "5px"
  //   },  { duration: 0.5 });
  // }
const Useanimate = ({setLoading}) => {
  const [scope, animate]= useAnimate();


  const introAnimate= async() => {
    await animate("#target1", {
      rotateX:"90deg"
    },{ duration: 1 , type: "backInOut"});
    await animate("#target2", {
      rotateX:"0deg"
    }, {duration: 1, type: "backInOut"})
    await animate("#target2", {
      rotateX:"90deg"
    }, {duration: 1, type: "backInOut"})
    await animate("#target3", {
      rotateX:"0deg"
    }, {duration: 1,type: "backInOut"})
    await animate("#target3", {
      scale:0.85,
      opacity: 0
    }, {duration: 0.5,type: "backInOut"})
    
    // await 
    setLoading(false);
  }
  return (
    <div ref={scope} className='w-screen h-screen bg-slate-900 flex items-center justify-center fixed top-0 right-0 z-50'>
      {/* <button onClick={introAnimate} className='bg-transparent text-green-400 fixed top-5'>Start</button> */}
      <motion.div
      id="target1" className="fixed top-[vh] text-green-400 h-[300px] w-[300px] bg-transparent text-6xl font-mons font-bold flex items-center justify-center"
      style= 
      {{
          rotateX: "0deg",
          transformZ: "10px",
          transformStyle: "preserve-3d",
      }}
      animate={introAnimate}
      >
        Create
      </motion.div>

      <motion.div
      id="target2" className="fixed top-[vh] text-green-400 h-[300px] w-[300px]  bg-transparent text-6xl font-mons font-bold flex items-center justify-center"
      style= 
      {{
          rotateX: "90deg",
          transformZ: "10px",
          transformStyle: "preserve-3d",
      }}
      >
        Inspire
      </motion.div>
      
      <motion.div
      id="target3" className="fixed top-[vh] text-green-400 h-[300px] w-[300px]  bg-transparent text-6xl font-mons font-bold flex items-center justify-center"
      style= 
      {{
          // transformOrigin: "bottom",
          rotateX: "90deg",
          transformZ: "10px",
          transformStyle: "preserve-3d",
      }}
      // whileInView={}
      >
        Repeat
      </motion.div>
    </div>
  )
}

export default Useanimate
