import React from 'react';

export default class Informacion extends React.Component{
    render(){
      return(
        <h1>
          {this.props.name} {this.props.lastname}
          <br/>
          {this.props.array[0].name}
        </h1>
      )
    }
}