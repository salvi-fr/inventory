import React, { useState } from 'react';
import sendAsync from '../../message-control/renderer';
import {UserHeader} from '../../components/Header';
import {stockInData,stockOutData} from '../../data/stock';

import {Form,Nav,CardGroup,Row,Card,Table,NavLink,Col, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
const options =[{name:"purchosed",id:1},{name:"donated",id:2}];
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
        <>
        <div className="App">
        <Nav variant="tabs" defaultActiveKey="StockIn"
>
  {/* in report  wee have products, stock out return amd return have to have good or bad condition option, and have to have option to choose time period  print email and excel
  settings we have to have  add user add module in user we have role option which is admin evaluator or stock manager and admin can add users only 
  
  name username password and role and phone number 
admin can only administrator users  and see the rest
  stock manager can admistrator stock or send reeposrts to admin or eevaluator 
  evaluator can see report only 
  */}

  
  <Nav.Item>
    <Nav.Link  eventKey="StockIn" onClick={handleStockIn}>Stock In</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="StockOut"  onClick={handleStockOut}>Stock Out</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="StockReturn"  onClick={handleStockOut}>Stock Return</Nav.Link>
  </Nav.Item>
</Nav>

{stockIn && 
<>

<Form>
  <Row>
    <Col>
    <Form.Group  controlId="formGridState">
     
    </Form.Group>
   
      <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productName" />
    <Form.Label>Product Code</Form.Label>
    <Form.Control type="text" placeholder="Enter product code" name="productCode"  />
    <Form.Label>Quality</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productQuality"  />
    <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Type
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Purchosed"
          name="typeRadio1"
          id="PurchosedRadio"
        />
        <Form.Check
          type="radio"
          label="Donation"
          name="typeRadio2"
          id="donationRadio"
        />
      </Col>
    </Form.Group>
  </fieldset>

    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Enter product price" />
  
    <div className="mt-2 p-2">
    <Form.Label>Type</Form.Label>
    <br/>
    <Form.Select defaultValue="Choose Type" placeholder="Choose Type" >
        <option>Purchosed</option>
        <option>Donated</option>
      </Form.Select>
      </div>
      <Form.Label>Manufacture date</Form.Label>
      <Form.Control type="date" placeholder="Manufacture Date" name="manufactureDate" />
    <Form.Label>Expiry date</Form.Label>
      <Form.Control type="date" placeholder="Last name" name="expireDate" />
    </Col>

    <Col>
   
    </Col>
  </Row>
<div className="m-4 item-center">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
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
<Row xs={1} md={2}  className="g-4 m-4">
<Col>

</Col>
<Col>

</Col>
  </Row>
  
</>
}
{!stockIn && 
<>
<Form>
  <Row>
    <Col>
    <Form.Group  controlId="formGridState">
     
    </Form.Group>
   
      <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productName" />
    <p>in stock we have 45 items left </p>
    <Form.Label>Product Code</Form.Label>
    <Form.Control type="text" placeholder="Enter product code" name="productCode"  />
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter product Name" name="productQuantity"  />
    <Form.Label>Peerson In Charge</Form.Label>
    <Form.Control type="text" placeholder="Enter person in charge" name="personInCharge"  />
    <Form.Label>Course modules </Form.Label>
     {/* have to add others  */}
    <Form.Control type="text" placeholder="Enter person in charge" name="personInCharge"  />
    <Form.Label>Description</Form.Label>
    <Form.Control type="textarea" placeholder="Enter person in charge" name="personInCharge"  />

  
    <div className="mt-2 p-2">
    <Form.Label>Type</Form.Label>
    <br/>
    <Form.Select defaultValue="Choose Type" placeholder="Choose Type" >
        <option>Purchosed</option>
        <option>Donated</option>
      </Form.Select>
      </div>
      <Form.Label>Manufacture date</Form.Label>
      <Form.Control type="date" placeholder="Manufacture Date" name="manufactureDate" />
    <Form.Label>Expiry date</Form.Label>
      <Form.Control type="date" placeholder="Last name" name="expireDate" />
    </Col>

    <Col>
   
    </Col>
  </Row>
<div className="m-4 item-center">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
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
<article>
                <input
                    type="text"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                />
                <button type="button" onClick={() => send(message)}>
                    Send
                </button>
                <br />
                <p>Main process responses:</p>
                <br />
                <pre>
                    {(response && JSON.stringify(response, null, 2)) ||
                        'No query results yet!'}
                </pre>
            </article>
            </>
}
        </div>
        </>
    );
}
export default Stock