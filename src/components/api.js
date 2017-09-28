import React from 'react';
import StatusImpression from './tckets';

class OptionsTickets extends React.Component {
        
          constructor(props) {
            super(props)
            this.state = { options: [] }
          }
        
          componentWillMount() {
            fetch('http://rcimex-eba08t/DocumentManager/api/Dashboard/1')
              .then((response) => {
                return response.json()
              })
              .then((options) => {
                this.setState({ options: options })
              })
          }
        
          render() {
            if (this.state.options.length > 0) {
              return (
                <div className="container-fluid">
                  <StatusImpression listado={this.state.options} />
                </div>
              )
            } else {
              return <p className="text-center">Cargando empleados...</p>
            }
          }
        
        }
        
        export default OptionsTickets;