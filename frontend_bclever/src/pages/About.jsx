import React from 'react'
import cmlogo from '../images/cmlogo.jpg'

const About = () => {
  return (
    <div className="w-full bg-slate-500 py-24 px-8">
      <div className="md:max-w-[1480px] max-w-[600px] grid md:grid-cols-2 m-auto">
        <div className="flex flex-col justify-start content-center">
          <p className="text-2xl text-green-400 font-medium py-2">LEARN TO B-CLEVER</p>
          <h1 className="md:leading-[72px] md:text-6xl text-5xl font-semibold"><span className="text-red-400">Save</span> it or <span className="text-red-400">Spend</span> it? I'll teach you the basics.</h1>          
          <p className="text-lg text-gray-400 py-2">There is no better time than now to learn to budget.</p>
        </div>
        <img className="md:order-last order-first shadow-lg rounded-md" src={cmlogo} alt={cmlogo}/>        
        </div>
        <div className="w-full bg-slate-500 py-24 px-16">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto">
          <h1 className="text-center text-2xl font-bold text-gray-400">Technologies used to build this application.</h1>
          <p className="text-center text-xl font-bold  text-gray-300">Showing off the features and the developer skills I utilized while building this project.</p>
          <div className="flex justify-center py-8 md:gap-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-400 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg><span className="text-gray-400">Learn</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-400 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
          </svg><span className="text-gray-400">Save</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-400 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg><span className="text-gray-400">Budget</span>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default About