import React from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
                    first_name: '',
                    course: 'React',
                    rate: 1,
                    comment: '',
                    showForm: true
                  }

  }

  handleFnChange = (e) => {
    this.setState({first_name : e.target.value})
  }
  handleCourseChange = (e) => {
    this.setState({course : e.target.value})
  }
  handleRatingChange = (e) => {
    this.setState({rating : e.target.value})
  }
  handleCommentChange = (e) => {
    this.setState({comment : e.target.value})
  }

  handleForm = () => {
    this.setState({showForm : false});
  }

  render(){
    //check current state after view is re-rendered onchange
    // console.log(this.state.first_name)
    console.log(this.state.course)
    if (this.state.showForm) {
      return (
        <div className='flexbox-container'>
          <div className='flexbox-container survey-wrapper'>
            <div className='survey'>
              <h3>Survey</h3>
              <label>Name:</label><input value={this.state.first_name} onChange={this.handleFnChange} placeholder="Name"></input>
              <br></br>
              <label>Course:</label>
              <select value={this.state.course} onChange={this.handleCourseChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='backbone'>Backbone</option>
              </select>
              <br></br>
              <label>Rating:</label>
              <select value={this.state.rating} onChange={this.handleRatingChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
              <br></br>
              <label>Comment</label>
              <br></br>
              <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
              <br></br>
              <button className="btn btn-primary" onClick={this.handleForm}>Submit</button>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='flexbox-container'>
          <div className='flexbox-container survey-wrapper'>
            <div className='survey'>
              <h3>Results</h3>
              <p>Name: {this.state.first_name}</p>
              <p>Course: {this.state.course}</p>
              <p>Rating: {this.state.rating}</p>
              <p>Comment: {this.state.comment}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Form;
