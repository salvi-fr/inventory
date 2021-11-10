import React, { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import * as  stockActions from '../redux/actions/stock';
import sendAsync from '../message-control/renderer';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import MUIDataTable from 'mui-datatables'
import {Form,Nav,CardGroup,Row,Card,Tabs ,Tab,Table,NavLink,Col, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
import {columns }from '../data/stock'
const  Welcome =(props)=> {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();
    // const [stockReturnTotal, setStockReturnTotal] = useState(0);
    const [stockReturnsT, setStockReturnsT] = useState(false);
    const [stockInsT, setStockInsT] = useState(false);
    const [stockOutsT, setStockOutsT] = useState(false);
    const[welcomeT, setWelcomeT] = useState(true);
    const [firstTime,setFirstTime]= useState(true)
    const [sprintExcel,setSprintExcel] = useState(false);
    const [data,setData] = useState([]);


    useEffect(() => {
  console.log("in props will mount",props)
        // props.getStockinsAction();
    },[]);

    useEffect (()=>{
        console.log('in component receive props',props)
    if(firstTime){
        props.getStockinsAction();
        setFirstTime(false)
    } 
    if(welcomeT) {
        setData(props.stockIns)
    }  
if(stockReturnsT){
    setData(props.stockReturns)
}
if(stockInsT){
    setData(props.stockIns)
}
if(stockOutsT){
    setData(props.stockOuts)
}
},[props])

const handleStockReturnsTab=()=>{
    props.getStockreturnsAction();
  setStockOutsT(false)
  setStockInsT(false)
  setWelcomeT(false)
  setStockReturnsT(true)

}

const handleStockInsTab=()=>{
  props.getStockinsAction();
  setStockOutsT(false)
  setStockInsT(true)
  setWelcomeT(false)
  setStockReturnsT(false)
  setData(props.stockIns)
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
if(sprintExcel){
  return(
    <div>
    <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"/>
    <table id="table-to-xls">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
        </tr>
    </table>

</div>
  )
}
    return (
        <div className="m-4">
            <h3>Reports</h3>

  <Nav variant="tabs" defaultActiveKey="WelcomeTab">
  <Nav.Item>
    <Nav.Link  eventKey="WelcomeTab"  onClick={handleWelcomeTab} title="Welcome">Welcome</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="stockIns"  onClick={handleStockInsTab} title="Welcome">STOCK IN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="stockOuts"  onClick={handleStockOutsTab} title="Stock Ins ">STOCK OUT  </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="stockReturns" onClick={handleStockReturnsTab} title="Stock Outs ">REETURNS</Nav.Link>
  </Nav.Item>
</Nav>
<MUIDataTable
                title={'User Report'}
                data={data}
                columns={columns}
                localization={{
                    toolbar: {
                      exportCSVName: "Export some excel format",
                      exportPDFName: "Export as pdf!!"
                    }
                  }}
                options={{
                    exportButton: {
                        csv: true,
                        pdf: true,
                        excel: true,
                     },
                    filterType: 'textField',
                    responsive: 'simple',
                    // selectableRows: 'none', // set checkbox for each row
                    // search: false, // set search option
                    // filter: false, // set data filter option
                    // download: false, // set download option
                    // print: false, // set print option
                    // pagination: true, //set pagination option
                    // viewColumns: false, // set column option
                    elevation: 0,
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />

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
