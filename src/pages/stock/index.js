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
    const[stockIn, setStockIn] = useState(false);
    const[stockOut, setStockOut] = useState(true);
    const[stockReturn, setStockReturn] = useState(false);
    const [stockOutInputData, setStockOutData] = useState( {
      module: '',
      productName: '',
      productCodee: '',
      manufactureDate: Date.now(),
      expiryDate:Date.now(),
      productQuantity:0,
      personInCharge:'',
      description:'',
      type:'purchosed',



  });
  const [stockInInputData, setStockInData] = useState( {
    module: '',
    productName: '',
    productCodee: '',
    manufactureDate: Date.now(),
    expiryDate:Date.now(),
    productQuantity:0,
    personInCharge:'',
    price:2323,
    description:'',
    type:'purchosed',
});
const [stockReturnInputData, setStockReturnData] = useState( {
  module: '',
  productName: '',
  productCodee: '',
  manufactureDate: Date.now(),
  expiryDate:Date.now(),
  productQuantity:0,
  price:32,
  personInCharge:'',
  description:'',
  type:'purchosed',
});


const handleStockIn=()=>{ 
  setStockIn(true);
  setStockOut(false);
  setStockReturn(false);}
const handleStockOut=()=>{ 
  setStockIn(false);
  setStockReturn(false);
  setStockOut(true);
}
const handleStockReturn=()=>{ 
  setStockIn(false);
  setStockOut(false);
  setStockReturn(true);
}


const changeStockInData=(e)=>{
  
    const { name, value } = e.target;
    setStockInData(stockInInputData => ({
        ...stockInInputData,
        [name]: value
    }));
}
const changeStockOutData=(e)=>{
    
  const { name, value } = e.target;
  setStockOutData(stockOutInputData => ({
      ...stockOutInputData,
      [name]: value
  }));
}
  const changeStockReturnData=(e)=>{
    
      const { name, value } = e.target;
      setStockReturnData(stockReturnInputData => ({
          ...stockReturnInputData,
          [name]: value
      }));
  }
  const handleStockOutSubmit=(event)=>{}
  const handleStockInSubmit=(event)=>{}
  const handleStockReturnSubmit=(event)=>{}
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
    <Nav.Link eventKey="StockReturn"  onClick={handleStockReturn}>Stock Return</Nav.Link>
  </Nav.Item>
</Nav>

{stockIn && 
  <div className="m-5">

<Form onSubmit={handleStockInSubmit}>
  <Row>
    <Col>
    <Form.Group  controlId="formGridState">
     
    </Form.Group>
   
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productName"
     
     onChange={e => {
         changeStockInData(e);
     }}
     value = {stockInInputData.productName}
     />
    <p>in stock we have 45 items left </p>
    <Form.Label>Product Code</Form.Label>
    <Form.Control type="text" placeholder="Enter product code" name="productCode" 
      onChange={e => {
        changeStockInData(e);
    }}
    value = {stockInInputData.productCode} />
    
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter product Name" name="productQuantity"  
      onChange={e => {
        changeStockInData(e);
    }}
    value = {stockInInputData.productQuantity}
    />
     <div className="mt-2 p-2">
    <Form.Label>Type</Form.Label>
    <br/>
    <Form.Select defaultValue="Choose Type" placeholder="Choose Type"
    onChange={e => {
      changeStockInData(e);
  }}
  value = {stockInInputData.type} >
        <option>Purchosed</option>
        <option>Donated</option>
      </Form.Select>
      </div>
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
    <Form.Control type="number" placeholder="Enter product price"
    name="price"
     onChange={e => {
      changeStockInData(e);
  }}
  value = {stockInInputData.price}
     />
  
    <Form.Label>Manufacture date</Form.Label>
      <Form.Control type="date" placeholder="Manufacture Date" name="manufactureDate" 
       onChange={e => {
        changeStockInData(e);
    }}
    value = {stockInInputData.manufactureDate}/>
    <Form.Label>Expiry date</Form.Label>
      <Form.Control type="date" placeholder="Last name" name="expireDate"
       onChange={e => {
        changeStockInData(e);
    }}
    value = {stockInInputData.expireDate} />
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
  
</div>
}
{stockOut && 
  <div className="m-5">
<Form onSubmit={handleStockOutSubmit}>
  <Row>
    <Col>
    <Form.Group  controlId="formGridState">
     
    </Form.Group>
   
      <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productName"
     
     onChange={e => {
         changeStockOutData(e);
     }}
     value = {stockOutInputData.productName}
     />
    <p>in stock we have 45 items left </p>
    <Form.Label>Product Code</Form.Label>
    <Form.Control type="text" placeholder="Enter product code" name="productCode" 
      onChange={e => {
        changeStockOutData(e);
    }}
    value = {stockOutInputData.productCode} />

    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter product Name" name="productQuantity"  
      onChange={e => {
        changeStockOutData(e);
    }}
    value = {stockOutInputData.productQuantity}
    />
    <Form.Label>Peerson In Charge</Form.Label>
    <Form.Control type="text" placeholder="Enter person in charge" name="personInCharge" 
      onChange={e => {
        changeStockOutData(e);
    }}
    value = {stockOutInputData.personInCharge} />
    <Form.Label>Course modules </Form.Label>
     {/* have to add others  */}
    <Form.Control type="text" placeholder="Enter person in charge" name="module" 
    
    onChange={e => {
      changeStockOutData(e);
  }}
  value = {stockOutInputData.module} />
    <Form.Label>Description</Form.Label>
    <Form.Control  as="textarea" aria-label="With textarea"  name="description"
     onChange={e => {
      changeStockOutData(e);
  }}
  value = {stockOutInputData.description} />

  
    <div className="mt-2 p-2">
    <Form.Label>Type</Form.Label>
    <br/>
    <Form.Select defaultValue="Choose Type" placeholder="Choose Type"
    onChange={e => {
      changeStockOutData(e);
  }}
  value = {stockOutInputData.type} >
        <option>Purchosed</option>
        <option>Donated</option>
      </Form.Select>
      </div>
      <Form.Label>Manufacture date</Form.Label>
      <Form.Control type="date" placeholder="Manufacture Date" name="manufactureDate" 
       onChange={e => {
        changeStockOutData(e);
    }}
    value = {stockOutInputData.manufactureDate}/>
    <Form.Label>Expiry date</Form.Label>
      <Form.Control type="date" placeholder="Last name" name="expireDate"
       onChange={e => {
        changeStockOutData(e);
    }}
    value = {stockOutInputData.expireDate} />
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
            </div>
}
{stockReturn && 
  <div className="m-5">
<Form onSubmit={handleStockReturnSubmit}>
  <Row>
    <Col>
    <Form.Group  controlId="formGridState">
     
    </Form.Group>
   
      <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product Name" name="productName"
     
     onChange={e => {
         changeStockReturnData(e);
     }}
     value = {stockReturnInputData.productName}
     />
    <p>in stock we have 45 items left </p>
    <Form.Label>Product Code</Form.Label>
    <Form.Control type="text" placeholder="Enter product code" name="productCode" 
      onChange={e => {
        changeStockReturnData(e);
    }}
    value = {stockReturnInputData.productCode}
      />
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter product Name" name="productQuantity"  
      onChange={e => {
        changeStockReturnData(e);
    }}
    value = {stockReturnInputData.productQuantity}
    />
    <Form.Label>Peerson In Charge</Form.Label>
    <Form.Control type="text" placeholder="Enter person in charge" name="personInCharge" 
      onChange={e => {
        changeStockReturnData(e);
    }}
    value = {stockReturnInputData.personInCharge} />
    <Form.Label>Course modules </Form.Label>
     {/* have to add others  */}
    <Form.Control type="text" placeholder="Enter person in charge" name="module" 
    
    onChange={e => {
      changeStockReturnData(e);
  }}
  value = {stockReturnInputData.module} />
    <Form.Label>Description</Form.Label>
    <Form.Control  as="textarea" aria-label="With textarea"  name="description"
     onChange={e => {
      changeStockReturnData(e);
  }}
  value = {stockReturnInputData.description} />

  
    <div className="mt-2 p-2">
    <Form.Label>Type</Form.Label>
    <br/>
    <Form.Select defaultValue="Choose Type" placeholder="Choose Type"
    onChange={e => {
      changeStockReturnData(e);
  }}
  value = {stockReturnInputData.type} >
        <option>Purchosed</option>
        <option>Donated</option>
      </Form.Select>
      </div>
      <Form.Label>Manufacture date</Form.Label>
      <Form.Control type="date" placeholder="Manufacture Date" name="manufactureDate" 
       onChange={e => {
        changeStockReturnData(e);
    }}
    value = {stockReturnInputData.manufactureDate}/>
    <Form.Label>Expiry date</Form.Label>
      <Form.Control type="date" placeholder="Last name" name="expireDate"
       onChange={e => {
        changeStockReturnData(e);
    }}
    value = {stockReturnInputData.expireDate} />
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
            </div>
}
        </div>
        </>
    );
}
export default Stock