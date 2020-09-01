import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import CreateComment from '../comments/CreateComment'
import CommentList from '../comments/CommentList'
import firebase from 'firebase/app'
import { deleteProject } from '../../store/actions/projectActions'


const ProjectDetails= (props) => {

    const { project, id } = props;

    if (project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title" style={{fontWeight:"bold"}}> { project.title }</span>
                        <p>{ project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                       {/* <div>document id: {id}</div> */}
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
                <div>
               {/* <CreateComment /> */}
                </div>
                <div className="input-field">
                {/*<button className="btn red darken-1 z-depth-0" onClick={deleteProject(id)}>Completed</button>*/}
                </div>
            </div>

            
        )
    } else {
        return(
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }

}



export const activeProject = (ownProps) => {
    const projId = ownProps.match.params.id;
    return{
        projId: projId
    }
}


const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    //console.log(id);
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        projects: projects,
        id: id
    }
}

export default compose(
    connect(mapStateToProps),//(activeProject),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'comments'}
    ])
)(ProjectDetails)