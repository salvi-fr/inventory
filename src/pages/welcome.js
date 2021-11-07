import React, { useState } from 'react';
import sendAsync from '../message-control/renderer';
import {UserHeader} from '../components/Header';
import {stockInData,stockOutData} from '../data/stock';

import {Form,Nav,CardGroup,Row,Card,Table,NavLink,Col, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

// eslint-disable-next-line no-undef
const  Stock =()=> {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();
    const[stockIn, setStockIn] = useState(true);

const handleStockIn=()=>{ setStockIn(true);}
const handleStockOut=()=>{ setStockIn(false);}
const  handleSubmit = (event) =>{

}
    const  send=(sql)=> {
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <div className="m-4">

<Row xs={1} md={2}  className="g-4 m-4">
<Col>
<Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total items </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        2234343
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total returns </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        324343
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total stock-in</Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
       32324
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card
    bg={"primary"}
    style={{ width: '15rem',height:'7rem' }}
    className="mb-2"
  >
    <Card.Header>Total stock-out </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        233434 in stock
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>
 
<Row xs={1} md={2}  className="g-4 m-4">
<Col>
<h2>Stock In</h2>
<Table striped bordered hover size="sm" className="m-4">
  <thead>
  <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quality</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {stockInData.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))}
  </tbody>
</Table>
</Col>
<Col>
<h2>Stock Out</h2>
<Table striped bordered hover size="sm" className="m-4">
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quality</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
  {stockOutData.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))}
  </tbody>
</Table>
</Col>
  </Row>
  </div>
    );
}
export default Stock