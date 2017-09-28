import React from 'react';



  const MySideNav = () => (
    <div className="container-fluid">
    <div className="row d-flex d-md-block flex-nowrap wrapper ">
        <div className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                <div className="list-group border-0 card text-center text-md-left">
                <a href="#menu1" className="list-group-item d-inline-block collapsed bg-inverse text-white" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-dashboard"></i> <span className="d-none d-md-inline">DashBoard</span> </a>
                <div className="collapse bg-inverse text-white" id="menu1">
                    <a href="#menu1sub1" className="list-group-item bg-inverse text-white" data-toggle="collapse" aria-expanded="true">EBA </a>
                    <div className="collapse bg-inverse text-white" id="menu1sub1">
                        <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menu1sub1">Subitem 1 a</a>
                        <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menu1sub1">Subitem 2 b</a>
                        <a href="/" className="list-group-item bg-inverse text-white" data-toggle="collapse" aria-expanded="false">Subitem 3 c </a>
                    </div>         
                    <a href="#menusub2" className="list-group-item  bg-inverse text-white" data-toggle="collapse"  aria-expanded="true"><i className="fa fa-book"></i> <span className="d-none d-md-inline">Document Manager </span></a>
                    <div className="collapse bg-inverse text-white" id="menusub2">
                       <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menusub2">3.1</a>
                       <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menusub2">3.2 </a>
                        <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menusub2">3.3 </a>
                        <a href="/" className="list-group-item bg-inverse text-white" data-parent="#menusub2">3.4 </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
)
export default MySideNav






