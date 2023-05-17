const initialState = {
  allowance: []  
}

const allowanceReducer = (state=initialState, action) => {

  switch(action.type) {
    case "CREATE_ALLOWANCE":
          return {
            ...state,
            allowance: action.payload             
          }
        default: 
      return state
  }
}
export default allowanceReducer

// const blog = state.find(b => b.id === action.payload.blog_id);
//       const updatedComments = addResource(blog.comments, action.payload)
//       const updatedBlog = updateResourceCollection(blog, "comments", updatedComments)
//       return updateResource(state, updatedBlog);