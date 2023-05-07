import React from 'react'
import { useSelector } from 'react-redux'
import mbaku from '../images/mbaku.jpg'

const Profile = () => {
  const currentKid  = useSelector(store => store.authReducer.currentKid);
  console.log(currentKid, "profile component")
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      {/* <!--Advert Card--> */}
      <div className="bg-white border-transparent rounded-lg shadow-xl">
          <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-center text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
              <h2 className="font-bold uppercase text-gray-600">{currentKid.name}</h2>
              <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={mbaku} alt="pic of mbaku"/>
          </div>
          <div className="p-2 text-center">
              <h1>Hey, {currentKid.name}</h1>
              <h2>Let's see how your budget is going!</h2>
              <p>You have ${currentKid.wallet.total}!</p>
              <p>You have ${currentKid.wallet.savings} in savings!</p>
              <p>You have ${currentKid.wallet.wants} to spend on wants!</p>
              <p>You have ${currentKid.wallet.needs} to spend on needs!</p>
          </div>
      </div>
      {/* <!--/Advert Card--> */}
    </div>
  )
}

export default Profile