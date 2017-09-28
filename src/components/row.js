import React from 'react';

class TicketRow extends React.Component {
    
      render() {
        return(
          
              <option value ={this.props.Value}>{this.props.name}</option>
        )
      }
    }
    export default TicketRow;

