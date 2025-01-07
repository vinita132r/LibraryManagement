import React from 'react';
import Table from 'react-bootstrap/Table';
import './Studentbookliststyle.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Studentbookborrow() {
  return (
    <div>
        {/* table start */}
      <div className='studbooklist'>
        <center><h3>Book Borrowed</h3></center><br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Book Name</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Date of book issued</th>
              <th>Due date</th>
              <th>Fine</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alchemist</td>
              <td>4321254642</td>
              <td>Psycology</td>
              <td>01-12-2024</td>
              <td>01-1-2025</td>
              <td>Rs. 10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Wings of Fire</td>
              <td>4321204612</td>
              <td>Non-fiction</td>
              <td>03-11-2024</td>
              <td>03-12-2024</td>
              <td>Rs. 105</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sherlock Holmes</td>
              <td>43212032142</td>
              <td>Fiction</td>
              <td>03-1-2025</td>
              <td>03-2-2025</td>
              <td>Rs. 0</td>
            </tr>
          </tbody>
        </Table>
        <br/>

        <button><IoArrowBackCircleOutline />&nbsp;
      Go Back</button>
      </div>
      
      {/* table end */}
      <br /><br />
    </div>
  )
}

export default Studentbookborrow