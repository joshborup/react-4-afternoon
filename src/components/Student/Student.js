import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    let studentId= this.props.match.params.id;
    axios.get(`http://localhost:3005/students/${studentId}`).then( response => {
      this.setState({
        studentInfo: response.data
      })
    })
  }

  render() {

    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name + ' ' + this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <Link to={`/classlist/${this.state.studentInfo.class}`}><button>Back</button></Link>
      </div>
    )
  }
}