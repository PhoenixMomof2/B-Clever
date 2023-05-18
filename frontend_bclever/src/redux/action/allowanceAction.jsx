import { setErrors } from './errorsAction'
import { headers } from '../../context/Globals'

export const addAllowance = (allowance, navigate) => {
  return dispatch => {
    fetch('/allowances', {
      method: "POST",
      headers,
      body: JSON.stringify({allowance})
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          const action = { type: "ADD_BALANCE", payload: data }         
          console.log(data, "create allowance")
          dispatch(action)
          navigate('/me')
        }          
    })    
  }
}

// export const deleteBlog = (id) => {
//   return dispatch => {
//     fetch(`/blogs/${ id }`, {
//       method: "DELETE",
//       headers: {
//         "Accept": "application/json"
//       }
//     })
//       .then(resp => resp.json())
//       .then(data => {
//         // update reducer state;
//         // how do we update reducer state?
//         dispatch({
//           type: "DELETE_BLOG",
//           payload: id
//         });
//       })
//   }
// }

// export const editBlog = (id, formData, navigate) => {
//   return dispatch => {
//     fetch(`/blogs/${id}`, {
//       method: "PATCH",
//       headers,
//       body: JSON.stringify(formData)
//     })
//       .then(resp => resp.json())
//       .then(data => {
//         // dispatch an action for editing our blog
//         const action = {
//           type: "EDIT_BLOG",
//           payload: data
//         }
//         dispatch(action);
//         navigate('/blogs')
//       })
//   }
// }

// export const addBlog = (formData, navigate) => {
//   return dispatch => {
//     fetch('/blogs', {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(resp => resp.json())
//       .then(data => {
//         if(data.errors) {
//           dispatch(setErrors(data.errors));
//         } else {
//           // addBlog(data)
//           // dispatch to BlogsReducer for adding a blog
//           const action = {
//             type: "ADD_BLOG",
//             payload: data
//           }
          
//           dispatch(action);
//           navigate('/blogs');
//         }
//       });
//   }
// }