import React from 'react';
import TicketsImpression from './api'


const Home = ()=> (

        <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main">
            <a href="/" data-target="#sidebar" data-toggle="collapse" className="float-left"><i className="fa fa-navicon fa-2x py-2 p-1"></i></a>
            <div className="page-header">
                <h2>App Manager</h2>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <button  className="btn btn-danger" data-toggle="collapse" data-target="#demo" aria-expanded="false">
                        Tickets
                    </button>
                    <div id="demo" className="width collapse show" aria-expanded="false">
                        <div className="list-group" style={{width: "400px"}}>
                           <TicketsImpression/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <button  className="btn btn-danger" data-toggle="collapse" data-target="#demo2" aria-expanded="true">
                       Documents
                    </button>
                    <div id="demo2" className="height collapse show" aria-expanded="true">
                        <div>
                           <p>hola</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
)
export default Home;