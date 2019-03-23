import React, { Component } from 'react';

class StudentList extends Component {
  constructor(){
    super();
    this.state = {
      students: ["camilo", "Nicolas", "chris", "Will", "Miller"]
    }
  }

  addStudent(){
    const newStudent = prompt('Student Name');
    //BIG NO NO => don't mutate the state
    //this.state.students.unshift(newStudent)

    const { students } = this.state;
    //1st step make a copy of the array
    const studentsCopy = [...students];

    //2nd Step modify the student array
    studentsCopy.unshift(newStudent)

    //3rd step set the state of the original array to the new array
    this.setState({
      students: studentsCopy
    })
  }

  deleteStudent(whichOne){
    const { students } = this.state
    const studentsCopy = [...students];

    //Remove element from the array
    studentsCopy.splice(whichOne, 1);//whichone is index and 1 how many elements to remove

    this.setState({
      students: studentsCopy
    })

  }


render(){
  const { students } = this.state;


  return(
    <div>
      <button onClick={()=> this.addStudent() } >Add new Student</button>
      <ul>
       { students.map( (oneStudent, index) => {
         return(
           <li key={ index }> 
           { oneStudent } 
           <button onClick={ ()=> this.deleteStudent(index) } >Delete</button>
           </li>
         )
       })}
      </ul>
    </div>
  )
}

}

export default StudentList;