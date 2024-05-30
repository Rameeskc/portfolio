import React from 'react'

function About() {
  return (
    <div
    name="about"
    className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '> 
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className=' text-xl '>
            A full-stack developer is a professional who is skilled in both front-end and back-end web development technologies. They are responsible for building and maintaining complete web applications, from the user interface (UI) to the server-side logic and database management.
            </p>

            <br />

            <p className=' text-xl  mt-4'>
            A full-stack developer is a professional who is skilled in both front-end and back-end web development technologies. They are responsible for building and maintaining complete web applications, from the user interface (UI) to the server-side logic and database management.
            </p>
        </div>
    </div>
  )
}

export default About