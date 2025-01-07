import React from 'react';
import Table from 'react-bootstrap/Table';
import './Studentbookliststyle.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Studentbooklist() {
  return (
    <div>
      <div className='studbooklist'>
        <center><h3>Book List</h3></center><br/>
        {/* card start */}
        <div>
        <Card style={{ width: '18rem', height: '38rem' }}>
          <Card.Img variant="top" src=""/>
          <Card.Body>
            <Card.Title>Alchemist</Card.Title>
            <Card.Text>Paulo Coelho</Card.Text>
            <Card.Text>1988</Card.Text>
            <Card.Text>Novel</Card.Text>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>
        </div>
        {/* card end */}
        
        <br/>

        <button><IoArrowBackCircleOutline />&nbsp;
      Go Back</button>
      </div>
      

      <br /><br />
    </div>
  )
}

export default Studentbooklist