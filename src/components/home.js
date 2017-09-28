import React from 'react';
import StatusImpression from './api'


const Home = ()=> (

        <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main">
            <a href="/" data-target="#sidebar" data-toggle="collapse" className="float-left"><i className="fa fa-navicon fa-2x py-2 p-1"></i></a>
            <div className="page-header">
                <h2>App Manager</h2>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-4 text-left">
                    <button  className="btn btn-danger" data-toggle="collapse" data-target="#demo" aria-expanded="false">
                        Type
                    </button>
                    <div id="demo" className="width collapse show" aria-expanded="false">
                        <div className="list-group" style={{width: "400px"}}>
                           <select name="" id="Type">
                               <option value="0">--select--</option>
                               <option value="1">Tickets</option>
                               <option value="2">Exceptions</option>
                           </select>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-4">
                           <button  className="btn btn-danger" data-toggle="collapse" data-target="#demo1" aria-expanded="false">
                              Status
                           </button>
                           <div id="demo1" className="width collapse show" aria-expanded="false">
                               <div className="list-group" style={{width: "400px"}}>
                                  <StatusImpression/>
                               </div>
                            </div> 
                        </div> 
                               <br/>
                               <form>
                                   <span>Ticket ID.</span>
                                  <input type="text" className="form-addon" placeholder="Ticket Id"/>
                               </form>
                           </div>
                        </div>
                       <br/>
                       <div className="col-md-4 text-left">
                          <button  className="btn btn-danger" data-toggle="collapse" data-target="#demo2" aria-expanded="false">
                               Template
                          </button>
                           <div id="demo2" className="width collapse show" aria-expanded="false">
                        <div>
                           <p>hola</p>
                        </div>
                    </div>
                    </div>
                    <br/>
                    <div className="col-md-6 text-left">
                    <button  className="btn btn-danger" data-toggle="collapse" data-target="#col3" aria-expanded="false">
                       Template Type
                    </button>
                    <div id="col3" className="width collapse show col-md-4" aria-expanded="true">
                        <div>
                           <p>hola</p>
                        </div>
                    </div>
                </div>
        </main>
)
export default Home;