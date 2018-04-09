import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';
// prop types will allow us to do some prop type checking on some of our components

class Note extends Component{

    constructor(props){
      super(props);
      this.noteContent= props.noteContent;
      this.noteId = props.noteId
      this.handleRemoveNote = this.handleRemoveNote.bind(this);
      // pass the props to the parent class
    }
    handleRemoveNote(id){
      this.props.removeNote(id);


    }
    render(props){
      return(
          <div className = "note fade-in">
          <span className = "closebtn" onClick = {()=> this.handleRemoveNote(this.noteId)} >
            &times;
          </span>
          <p className = "noteContent">{this.noteContent}</p>
          </div>
      )
    }
}
Note.propTypes = {
   noteContent: PropTypes.string

}
export default Note;