import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{

    constructor(props){
     super(props);
     this.state = {
         newNoteContent : '',
     };
     this.handleUserInput = this.handleUserInput.bind(this);
     this.writeNote = this.writeNote.bind(this);
    }
    // when the user input changes  set the newNoteContetent 
    // to the value of whas in the input box
    handleUserInput(e){

     this.setState({
         newNoteContent: e.target.value ,
     })
    }
    writeNote(){
       // Make sure you call a method to set the noteContent for a note to the value
       // given by the input
       this.props.addNote(this.state.newNoteContent);
       
       // Set the newNoteContent back to an empty string one the input button is selected
       this.setState({
           newNoteContent: '',
       })
    }
    render(){
     return (
         <div className = "formWrapper">
          <input className = "noteInput" placeholder = "Write a new note..." onChange = {this.handleUserInput} value ={this.state.newNoteContent} />
         
          <button className = "noteButton"
          onClick = {this.writeNote} > Add Note</button>
         </div>
     )
    }
}
export default NoteForm;