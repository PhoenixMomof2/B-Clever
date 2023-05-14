import React from 'react'
import { useSelector } from 'react-redux'

const ParentList = () => {
  const parents = useSelector(store => store.parentAuthReducer)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Parents</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {parents.map((parent) => (
            <a key={parent.id} href={parent.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{parent.name}</h3>
              <h3 className="mt-4 text-sm text-gray-700">{parent.age}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{parent.state}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ParentList