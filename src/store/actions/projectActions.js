import firebase from 'firebase/app'

export const createProject = (project) => {
    return (dispatch,getState) =>{
        //make async call to database
        const firestore = firebase.firestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            title: project.title,
            content: project.content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    }
};

export const deleteProject = (project, pid) => {
    return (dispatch,getState, pid) =>{
        //make async call to database
        const firestore = firebase.firestore();
        firestore.collection('projects').doc(pid).delete()
    .then(() => {
        dispatch({ type: 'DELETE_PROJECT', project: project });
    }).catch((err) => {
        dispatch({ type: 'DELETE_PROJECT_ERROR', err });
    })

}
};