import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };

  addNote = () => {
    //create a new note
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    //add a new note to existing notes array in state
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;

