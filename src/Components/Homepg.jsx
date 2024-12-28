import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Homepg() {
  return (
    <div>
        <br/>
          <div className="homept">
              <Row>
                  <Col>
                  <div className="cont">
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt="lib" height="650" width="1550"/>
                  <p className="textOverlay">Welcome to Open Library</p>
                  </div>
                
                  </Col>
              </Row>
          </div>
          {/* About part start */}
          <div className="abtpt">
              <br/><br/>
              <Row>
                  <Col>
                  <div className="cont1">

                  <h3>About</h3>
                  <p>A library management system is a computerized information system that supports the management of library resources, including their acquisition, representation, and circulation. It is composed of interconnected subsystems that work together to achieve the common purpose of efficiently managing library operations.</p>
                  
                  </div>
                
                  </Col>
              </Row>
          </div>
          {/* About part end */}

          {/* New section */}
          <h3>New section</h3>
    </div>
  )
}

export default Homepg