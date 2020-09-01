import firebase from 'firebase/app'

export const createComment = (comment) => {
    return (dispatch, getState) =>{
        //make async call to database
        const firestore = firebase.firestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        firestore.collection('comments').add({
            content: comment.content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT', comment: comment });
        }).catch((err) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR', err });
        })

    }
};