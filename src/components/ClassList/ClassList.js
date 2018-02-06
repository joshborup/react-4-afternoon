import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      
    }
    
  }

  componentDidMount(){
    let name = this.props.match.params.class;
    axios.get(`http://localhost:3005/students?class=${name}`).then(response => {
      console.log(response.data)
      this.setState({
        students: response.data,
      })
    })
  }

  render() {

    let studentName = this.state.students.map((student, i) => {
      return(
        <Link key={i} to={`/student/${student.id}`}><h3 >{student.first_name + ' ' + student.last_name}</h3></Link>
      )
    })

    return (
      <div className="box">
        <h1>{this.props.match.class}</h1>
        <h2>ClassList:</h2>
        {studentName}
        <Link to='/'><button>Back</button></Link>
      </div>
    )
  }
}