import React from 'react';

export default class GSGVideoBox extends React.Component {
  render() {
    return(
      <video controls>
        {this.props.nosupport}
      </video>
    );
  }
};
