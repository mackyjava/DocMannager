import React from 'react';
import TicketRow from './row';

class StatusImpresion extends React.Component {
    
      render() {
        return (
          <div className="container-fluid">
            <select className="media-list">
            <option>--select--</option>
              { 
                this.props.listado.map((options) => {
                  return <TicketRow name={ options.Text}
                                    key={options.Value}  />
                })
              }
            </select>
          </div>
        )
      }
    }
export default StatusImpresion;