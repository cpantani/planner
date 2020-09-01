const initState = {
    comments: [
      {id:'1', content:'blah blah blah'},
      {id:'2', content:'blah blah blah'}, 
      {id:'3', content:'blah blah blah'}
    ]
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_COMMENT':
        console.log('created comment', action.comment);
        return state;
      case 'CREATE_COMMENT_ERROR':
        console.log('create comment error', action.err);
        return state;
      default:
        return state;
    }  
  }
  
  
  export default commentReducer