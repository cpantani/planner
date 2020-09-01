import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content card-panel grey lighten-2">
                    <span className="card-title">Notification</span>
                    <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="red-text text-darken-1">{item.user}: </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text text-darken-1 note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  Notifications