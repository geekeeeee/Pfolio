import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const articles = [
    {id: 1, title: "Great Times", excerpt: "awaits You"},
    {id: 2, title: "Great Times", excerpt: "awaits You"},
    {id: 3, title: "Great Times", excerpt: "awaits You"},
    {id: 4, title: "Great Times", excerpt: "awaits You"},
    {id: 5, title: "Great Times", excerpt: "awaits You"},
    {id: 6, title: "Great Times", excerpt: "awaits You"}
];
const Stagger = () => {
    return (
      <div>
        {articles.map((article, i) => (
          <AnimatePresence>
            <motion.div  
                className="bg-purple-600 text-white text-md rounded-md m-2 p-5 inline-block" 
                key={article.id}
                initial={{opacity:0, translateX: -50 }}
                whileInView={{opacity: 1, translateX: 0}}
                exit={{translateX:-50, opacity:0}}
                transition= {{duration : 0.3 , delay: i*0.2}}
            >
                <h2 className='font-bold'>{article.title}</h2>
                <p>{article.excerpt}</p>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    )
  }
export default Stagger
