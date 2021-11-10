import React, { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import * as  stockActions from '../redux/actions/stock';
import sendAsync from '../message-control/renderer';

import {stockInData,stockOutData} from '../data/stock';

import {Form,Nav,CardGroup,Row,Card,Tabs ,Tab,Table,NavLink,Col, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
import StockInCard from '../components/stock/i'
import StockOutCard from '../components/stock/o'
import StockReturnCard from '../components/stock/r'
import StockTotalCard from '../components/stock/s'
// eslint-disable-next-line no-undef
const  Welcome =(props)=> {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();
    // const [stockReturnTotal, setStockReturnTotal] = useState(0);
    const [stockReturnsT, setStockReturnsT] = useState(false);
    const [stockInsT, setStockInsT] = useState(false);
    const [stockOutsT, setStockOutsT] = useState(false);
    const[welcomeT, setWelcomeT] = useState(true);
    const createStockIn=()=>{
      
    }
    // const handleIncomingDataRequest=async(entity) =>{
    //   if(entity==='stock-in'){
    //     sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "in_stock"').then((re) => setStockInTotal(re[0].count))
    //   }
    //   if(entity==='stock-out'){
    //     sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "out_stock"').then((res) => setStockOutTotal(res[0].count))
    //   }
    //   if(entity==='stock'){
    //     sendAsync('SELECT COUNT(*) as count  from STOCK ').then((r) => setStockTotal(r[0].count))
    //   }
    //   if(entity==='stock-return'){
    //     sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "return_stock"').then((result) => setStockReturnTotal(result[0].count))
    //   }
    //     const response = await sendAsync(message);
    //     setResponse(response);
    //     setStockInTotal(response.stockInTotal);
    //     setStockOutTotal(response.stockOutTotal);
    //     setStockTotal(response.stockTotal);
    //     setStockReturnTotal(response.stockReturnTotal);
    // }
    useEffect(() => {
  
  // props.getStockoutNumberAction();
  // props.getStockreturnNumberAction();
  
  
    },[]);

    useEffect (()=>{
console.log('in welcome page all possible',props)
    },[props])
// const handleStockIn=()=>{ setStockIn(true);}
// const handleStockOut=()=>{ setStockIn(false);}
// const  handleSubmit = (event) =>{

// }
const handleStockReturnsTab=()=>{
  setStockOutsT(false)
  setStockInsT(false)
  setWelcomeT(false)
  setStockReturnsT(true)
console.log("yoo")
props.getStockreturnsAction();
}

const handleStockInsTab=()=>{
  setStockOutsT(false)
  setStockInsT(true)
  setWelcomeT(false)
  setStockReturnsT(false)
  props.getStockinsAction();
}
const handleStockOutsTab=()=>{
  setStockOutsT(true)
  setStockInsT(false)
  setWelcomeT(false)
  setStockReturnsT(false)
  props.getStockoutsAction();
}
const handleWelcomeTab=()=>{
  setStockOutsT(false)
  setStockInsT(false)
  setWelcomeT(true)
  setStockReturnsT(false)
  props.getStockinNumberAction();
}
    const  send=(sql)=> {
      // props.getStockinNumberAction();
      // props.getStockoutNumberAction();
      // props.getStockreturnNumberAction();
      // props.getStockoutsAction();
      // props.getStockinsAction();
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <div className="m-4">
  <Nav variant="tabs" defaultActiveKey="WelcomeTab">
  <Nav.Item>
    <Nav.Link  eventKey="WelcomeTab"  onClick={handleWelcomeTab} title="Welcome"> Welcome </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="stockIns"  onClick={handleStockInsTab} title="Stock Ins ">Stock In</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="stockOuts" onClick={handleStockOutsTab} title="Stock Outs ">Stock Out</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="stockReturns" onClick={handleStockReturnsTab} title="Stock Returns ">Stock Return</Nav.Link>
  </Nav.Item>
</Nav>

<h2>Stock</h2>
<Table striped bordered hover size="sm" className="m-4">
  <thead>
  <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quality</th>
      <th>Type</th>
    </tr>
  </thead>
  {welcomeT && 
  <p> welcome onboard</p>}
  {stockInsT &&
  <tbody>
    {props.stockIns.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.productname}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))}
  </tbody>}
  {stockOutsT &&
  <tbody>
    {props.stockOuts.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.productname}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))}
  </tbody>}

  {stockReturnsT &&
  <tbody>
    {props.stockReturns.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.productname}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))}
  </tbody>}
</Table>
<Row xs={1} md={2}  className="g-4 m-4">
  <Col>
  <StockTotalCard/>
  </Col>
<Col>
  <StockInCard/>
  </Col>
  
  <Col>
<StockReturnCard/>
  </Col>
  <Col>
  <StockOutCard/>
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
   {stockInsT &&  props.stockIns.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.productname}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))
    }
       {stockOutsT &&  props.stockOuts.map((item,index)=>(
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.productname}</td>
      <td>{item.quantity}</td>
      <td>{item.type}</td>
      </tr>
    ))
    }
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
                         {/* {(stockOutD && JSON.stringify(stockOutD, null, 2)) ||
                        'No query results yet!'}
                         {(stockInD && JSON.stringify(stockInD, null, 2)) ||
                        'No query results yet!'} */}
                </pre>
            </article>
  </div>
    );
}

Welcome.propTypes = {
  stockActions: PropTypes.func.isRequired,
  stockIns: PropTypes.array.isRequired,
  stockOuts: PropTypes.array.isRequired,
  stockReturns:PropTypes.array.isRequired,
  stockreturnNumber:PropTypes.number.isRequired,
  stockinNumber:PropTypes.number.isRequired,
  stockoutNumber:PropTypes.number.isRequired,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.object,
  stockInError:PropTypes.object,
  stockOutError:PropTypes.object,
  stockReturnError:PropTypes.object,
};
Welcome.defaultProps = {
  loading:false,
  error:null,
  stockInError:null,
  stockOutError:null,
  stockReturnError:null,
  stockIns:[],
  stockOuts:[],
  stockReturns:[],
  stockreturnNumber:0,
  stockinNumber:0,
  stockoutNumber:0,
  stockActions: () => {},
};
export const mapStateToProps = ({ stock
  :{   stockIns,
    stockOuts,
    stockReturns,
    stockreturnNumber,
    stockinNumber,
    stockoutNumber,
    loading,
    error,
    stockInError,
    stockOutError,
    stockReturnError} 
}) => ({
  stockIns,
  stockOuts,
  stockReturns,
  stockreturnNumber,
  stockinNumber,
  stockoutNumber,
  loading,
  error,
  stockInError,
  stockOutError,
  stockReturnError
});
export const mapDispatchToProps = (dispatch) => ({
    getStockinNumberAction: bindActionCreators(stockActions.getStockinNumber, dispatch),
    getStockinsAction: bindActionCreators(stockActions.getStockins, dispatch),
    getStockoutsAction: bindActionCreators(stockActions.getStockouts, dispatch),
    getStockreturnsAction: bindActionCreators(stockActions.getStockreturns, dispatch),
    getStockoutNumberAction: bindActionCreators(stockActions.getStockoutNumber, dispatch),
    getStockreturnNumberAction: bindActionCreators(stockActions.getStockreturnNumber, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
