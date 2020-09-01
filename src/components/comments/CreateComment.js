import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/commentActions'
import { Redirect } from 'react-router-dom'

class CreateComment extends Component {
    state = {
        content:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createComment(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Comment</h5>
                    <div className="input-field">
                        <label htmlFor="content">Enter Comment</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(CreateComment)

