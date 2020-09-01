import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import commentReducer from './commentReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    comment: commentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer