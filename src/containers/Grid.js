import React, { Component } from 'react';
import Stream from './Stream';
import '../styles/Grid.css';

class Grid extends Component {

  constructor (props) {
    super(props);
    this.state = {

    }
  }

  renderStreams = () => {

  }


  render () {
    return (
      <div className='Grid' style={{
        height: '1000px',
        width: '1600px',
        background: 'black',
        position: 'relative',
      }}>
        <Stream />
        <Stream />
        <Stream />
        <Stream />
        <Stream />
        <Stream />
      </div>
    )
  }
}

export default Grid;