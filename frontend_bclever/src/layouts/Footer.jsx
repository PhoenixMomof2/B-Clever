import { HeartIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Footer() {
  return (
    <div className="absolute w-full">
      <footer className="flex p-3 bg-black">
        <div className="inline-block text-xs opacity-70 justify-center pt-24 pb-2">
        <p className="m-0 text-center text-white small">Copyright &copy; B-Clever 2023</p>
        <p>I <HeartIcon className="text-red-500 pr-1 h-3.5"/> educating curious young minds.</p>
        </div>
      </footer>
    </div>
  )
}
export default Footer