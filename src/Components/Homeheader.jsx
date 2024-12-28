import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Homeheader({a}){
    const onAbt=()=>{
    a()
  }

  return (
    <div>
          <div className="navst">
              {/* nav start */}
              <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item>
                    <button className="navbtn">Home</button>
                  </Nav.Item>
                  <Nav.Item>
                    <button className="navbtn" onClick={onAbt}>About</button>  
                  </Nav.Item>
                  <Nav.Item>
                    <button className="navbtn">Contact</button>
                  </Nav.Item>
                  <Nav.Item>
                    <button className="navbtn">Login</button>
                  </Nav.Item>
              </Nav>
              {/* nav end */}

              
          </div>
          
    </div>
  )
}


export default Homeheader