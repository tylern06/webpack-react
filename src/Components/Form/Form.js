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

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleForm = () => {
    this.setState({showForm : false});
  }

  render(){
    //check current state after view is re-rendered onchange
    // console.log(this.state.first_name)
    // console.log(this.state.course)
    if (this.state.showForm) {
      return (
        <div className='flexbox-container'>
          <div className='flexbox-container survey-wrapper'>
            <div className='survey'>
              <h3>Survey</h3>
              <label>Name:</label><input name='first_name' value={this.state.first_name} onChange={this.handleChange} placeholder="Name"></input>
              <br></br>
              <label>Course:</label>
              <select name='course' value={this.state.course} onChange={this.handleChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='backbone'>Backbone</option>
              </select>
              <br></br>
              <label>Rating:</label>
              <select name='rating' value={this.state.rating} onChange={this.handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
              <br></br>
              <label>Comment</label>
              <br></br>
              <textarea name='comment' value={this.state.comment} onChange={this.handleChange}></textarea>
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
