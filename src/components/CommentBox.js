import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions' 

class CommentBox extends Component {
  state = {
    comment: '',
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO - call an action creator 
    this.props.saveComment(this.state.comment); 
    this.setState({
      comment: ''
    })
  }


  render(){
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>
            <textarea onChange={this.handleChange} value={this.state.comment} />
            <div>
              <button>Submit</button>
            </div>
          </h4>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox); 