import React from 'react'

import '../App.css' 
import { motion, AnimatePresence} from "framer-motion"
const Imagebox = () => {
    return(
        <motion.div 
        className="w-[200px] h-[300px] bg-green-400 flex justify-center items-center rounded-md overflow-hidden relative
"
          initial={{ scale : 0.25 }}
          whileInView={{
            scale:1
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
        //   viewport={{once: true}}
        >
        </motion.div>
    );
}

export const Projectreveal1 = (props) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 space-x-4 my-20 mx-10 poppins">
        <div className="col-span-1 col-start-1 flex items-center justify-start" ><Imagebox/></div>
        <div className="col-span-3 bg-gray-800 col-start-2 col-end-5 p-4 flex justify-start items-center overflow-hidden rounded-md
">
            <motion.div
            initial={{translateX: -50, translateY:0,opacity:0}}
            whileInView={{translateX: 0, translateY:0, opacity:1}}
            transition={{duration:0.5}} className="text-start"
            >
                <a href={props.link} className="text-[25px] mb-2">{props.projectName}</a>
                <p className="font-thin">{props.description}</p>
            </motion.div>
        </div>
    </div>

  )
}

export const Projectreveal2 = (props) => {
    return (
      <div className="grid grid-flow-col grid-cols-4 space-x-4  mx-10 my-20 poppins">
        <div className="col-span-3 rounded-md
 bg-gray-800 p-4 flex justify-start items-center overflow-hidden">
            <motion.div
            initial={{translateX: 50, translateY:0,opacity:0}}
            whileInView={{translateX: 0, translateY:0, opacity:1}}
            transition={{duration:0.5}}
            className="text-end"
            >
            <a href={props.link} className="text-[25px] mb-2">{props.projectName}</a>
            <p className="font-thin">{props.description}</p>
            </motion.div>
        </div>
        <div className="col-span-1 col-start-4 flex items-center justify-end "><Imagebox/></div>
        
      </div>
    );
  };
  
