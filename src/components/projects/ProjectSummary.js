import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3 card-panel grey lighten-2">
            <b><span className="card-title"  style={{fontWeight:"bold"}}>{project.title}</span></b>
    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
    <p className="grey-text text-darken-1">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
      </div>
    )
}

export default ProjectSummary