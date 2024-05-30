import React from 'react'
import image1 from "../assets/portfolio/624b7d68b2d825910c0a449d9c22cf03.jpg";
import image2 from "../assets/portfolio/43144826ff3546e38e834e80455b74d5.jpeg";
import image3 from "../assets/portfolio/a-3d-girl-cartoon-character-generated-by-cartoon-character-maker-in-Fotor.webp";
import image4 from "../assets/portfolio/cartoon-character-with-helmet-glasses-that-says-i-m-bomb_849966-13.avif";
import image5 from "../assets/portfolio/cartoon-character-with-yellow-jacket-sunglasses_874813-742.avif";
import image6 from "../assets/portfolio/sad-schoolboy-colorful-background-3d-image-generative-ai_58409-28534.avif";

const Portfolio = () => {

  const portfolio = [
    {
      id:1,
      src:image1
    },
    {
      id:2,
      src:image2
    },
    {
      id:3,
      src:image3
    },
    {
      id:4,
      src:image4
    },
    {
      id:5,
      src:image5
    },
    {
      id:6,
      src:image6
    },
  ]

  
  return (
    <div
      name="portfolio"
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto '
    >
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className=' py-6'>Check out some of my work right here</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          
          
          {
            portfolio.map(({id,src}) =>(
              <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
            <img
             src={src}
             alt="" 
             className=' rounded-md duration-200 hover:scale-105'
            />
            <div className=' flex items-center justify-center'>
              <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
            ))
          }
          
          
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio
