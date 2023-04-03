// // src/context/KidContext.js
// import React, { createContext, useState, useEffect } from "react";

// import axios from 'axios'

// // Create context
// const KidContext = createContext()

// // Create provider
// function KidProvider({ children }) {
//   const [kids, setKids] = useState([])
//   const [kid, setKid] = useState({})
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [errors, setErrors] = useState([])

//   // const fetchKids = () => {
//   //   axios.get('http://localhost:3000/kids')
//   //     .then(res => {
//   //       const kids = res.data
//   //       setKids({ kids });
//   //       console.log(kids)
//   //     })
//   // }

// //   const  fetchKids  =  async () => {
// //     debugger;
   
// //     const res =  await  fetch('http://localhost:3000/kids')
// //     const data =  await res.json()
// //     console.log(data)
// //     return data
// // }

//   //   useEffect(() => {
//   //   fetch(`url/${kid.id}`)
//   //     .then((res) => res.json())
//   //     .then((kid) => {
//   //       if (kid.id) {
//   //         setKid(kid);
//   //         setLoggedIn(true); //keeps kid logged in when page is refreshed
//   //       }
//   //     })
//   //   }, [])
//   // console.log(kids, 'KidContext')

//   // useEffect(() => {
//   //   fetch('http:localhost:3000/kids')
//   //     .then((res) => res.json())
//   //     .then((data) => setKids(data))
//   // }, [])  

//   // 
//   //   fetch()
//   // };

//   const login = (kid) => {
//     setKid(kid);
//     setLoggedIn(true);
//   };

//   const logout = () => {
//     setKid({});
//     setLoggedIn(false);
//   };

//   const signup = (kid) => {
//     setKid(kid);
//     setLoggedIn(true);
//   };

//   return (
//     <KidContext.Provider
//       value={{
//         kid,
//         kids,
//         fetchKids,
//         login,
//         logout,
//         signup,
//         loggedIn,
//         setErrors,
//         errors,     
//       }}
//     >
//       {children}
//     </KidContext.Provider>
//   );
// }

// export { KidContext, KidProvider };