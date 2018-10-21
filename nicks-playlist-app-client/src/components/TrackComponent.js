import React, { Component } from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

class TrackComponent extends Component {
  render() {
    return (
      <div className="track-component">
        Name -- Artist -- <AddButton /> OR <DeleteButton />
      </div>
    );
  }
}

export default TrackComponent;
