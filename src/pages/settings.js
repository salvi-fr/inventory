import React, { useState ,Fragment,useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import {
    Card,
    Grid,
    FormControlLabel,
    Checkbox,
    Button,
    MenuItem,
    Divider,
} from '@material-ui/core'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@material-ui/core'
import shortid from 'shortid'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import * as  userActions from '../redux/actions/user';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import sendAsync from '../message-control/renderer';
import { makeStyles } from '@material-ui/core/styles'
import {columns} from '../data/user'
import {stockInData,stockOutData} from '../data/stock';
import MUIDataTable from 'mui-datatables'
import { useSelector } from 'react-redux'
import {Form,Nav,CardGroup,Row,Tabs ,Tab,NavLink,Col, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
// eslint-disable-next-line no-undef
const years_category = [
    { name: 'YEAR ONE', code: '1' },
    { name: 'YEAR TWO', code: '2' },
    { name: 'YEAR THREE', code: '3' },
    { name: 'YEAR FOUR', code: '4' },
    { name: 'YEAR FIVE', code: '5' },
    { name: 'YEAR SIX', code: '6' }];
    const roles = [
        { name: 'Admin', code: 'AD' },
        { name: 'StockManager', code: 'SM' },
        { name: 'Evaluator', code: 'EV' }];

        const useStyles = makeStyles(({ palette, ...theme }) => ({
            productTable: {
                '& thead': {
                    '& th:first-child': {
                        paddingLeft: 16,
                    },
                },
                '& td': {
                    borderBottom: 'none',
                },
                '& td:first-child': {
                    paddingLeft: '16px !important',
                },
            },
        }))
const  Welcome =(props)=> {
    const classes = useStyles()
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();
    const [userT, setUserT] = useState(true);
    const [moduleT, setModuleT] = useState(false);
    const [welcomeT, setWelcomeT] = useState(false);
    const [uid, setUid] = useState(null)
    const createStockIn=()=>{
      
    }
    const [u,setShouldOpenEditorDialog] = useState(false);
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


const handleModulesTab=()=>{
  setUserT(false)
  setModuleT(true)
  setWelcomeT(false)
//   props.getStockinsAction();
}
const handleWelcomeTab=()=>{
    setUserT(false)
    setModuleT(false)
    setWelcomeT(true)
    // props.getStockinsAction();
  }

const handleUSerTab=()=>{
    setUserT(true)
    setModuleT(false)
    setWelcomeT(false)
  props.getUsersAction(); 
}
const handleDeleteUser=(id)=>{}
    const  send=(sql)=> {
      // props.getStockinNumberAction();
      // props.getStockoutNumberAction();
      // props.getStockreturnNumberAction();
      // props.getStockoutsAction();
      // props.getStockinsAction();
        sendAsync(sql).then((result) => setResponse(result));
    }
    const [state, setState] = useState({})
    const [open, setOpen] = useState(false)

    // const { cartList = [] } = useSelector((state) => state.ecommerce)

    // const getTotalCost = () => {
    //     let totalCost = 0
    //     cartList.forEach((product) => {
    //         totalCost += product.amount * product.price
    //     })
    //     return totalCost
    // }

    const handleChange = (event) => {
        event.persist()
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        console.log(state)
        toggleDialog()
    }

    const toggleDialog = () => {
        setOpen(!open)
    }

    let {
        username,
        lastName,
        company,
        email,
        year,
        modulecode,
        phonenumber,
        modulename,
        modulecredits,
        country,
        names,
        role,
        password,
        city,
        address,
    } = state


    return (
        <div className="m-4">
  <Nav variant="tabs" defaultActiveKey="WelcomeTab">
      <Nav.Item>
    <Nav.Link  eventKey="WelcomeTab"  onClick={handleWelcomeTab} title="Welcome"> Add User </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="UserTab"  onClick={handleUSerTab} title="Welcome"> Add User </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="ModulesTab"  onClick={handleModulesTab} title="Stock Ins ">Add Module</Nav.Link>
  </Nav.Item>
</Nav>

<h2>Settings</h2>
{welcomeT &&<p> welcome to settings you can add user or modules in this section</p>}
{userT && <><p> welcome to settings you can add user or modules in this section</p>
    <Table
                    className={clsx(
                        'whitespace-pre min-w-750',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Names</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phonenumber</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((user, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {user.NAMES}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {user.USERNAME}
                                    </TableCell>
                                    <TableCell className="px-0">
                                        {user.EMAIL}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {user.PHONENUMBER}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {user.ROLE}
                                    </TableCell>
                                    {/* <TableCell className="px-0">
                                        {user.isActive ? (
                                            <small className="rounded bg-primary elevation-z3 text-white px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="rounded bg-light-gray elevation-z3 px-2 py-2px">
                                                inactive
                                            </small>
                                        )}
                                    </TableCell> */}
                                    <TableCell className="px-0 border-none">
                                        <IconButton
                                            onClick={() => {
                                                setUid(user.id)
                                                setShouldOpenEditorDialog(true)
                                            }}
                                        >
                                            <Icon color="primary">E</Icon>
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleDeleteUser(user)
                                            }
                                        >
                                            <Icon color="error">D</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
    <MUIDataTable
                title={'User Report'}
                data={props.users}
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
           <Card className="checkout m-sm-30 p-sm-24 p-4">
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
                <h5 className="font-medium mt-0 mb-6">Add User</h5>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={3} className="mb-2">
                        <Grid item xs={6}>
                                <TextValidator
                                    variant="outlined"
                                    label="Names"
                                    onChange={handleChange}
                                    type="text"
                                    name="names"
                                    value={names || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextValidator
                                    variant="outlined"
                                    label="Username"
                                    onChange={handleChange}
                                    type="text"
                                    name="username"
                                    value={username || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextValidator
                                    variant="outlined"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={email || ''}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextValidator
                                    variant="outlined"
                                    label="Mobile"
                                    onChange={handleChange}
                                    type="number"
                                    name="mobile"
                                    value={phonenumber || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextValidator
                                    label="Role"
                                    select
                                    name="role"
                                    variant="outlined"
                                    value={role || ''}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    {roles.map((role) => (
                                        <MenuItem
                                            key={role.code}
                                            value={role.name}
                                        >
                                            {role.name}
                                        </MenuItem>
                                    ))}
                                </TextValidator>
                            </Grid>
                            <Grid item xs={6}>
                                <TextValidator
                                    variant="outlined"
                                    label="password"
                                    onChange={handleChange}
                                    type="text"
                                    name="password"
                                    value={password || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                                className="w-full"
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                               Create User
                            </Button>
                   
                </Grid>
            </ValidatorForm>

            {/* <PaymentDialog open={open} toggleDialog={toggleDialog} /> */}
        </Card>
   
        </>}
{moduleT &&

<Card className="checkout m-sm-30 p-sm-24 p-4">
<ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
    <h5 className="font-medium mt-0 mb-6">Add User</h5>
    <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={3} className="mb-2">
            <Grid item xs={6}>
                    <TextValidator
                        variant="outlined"
                        label="Module Name"
                        onChange={handleChange}
                        type="text"
                        name="modulename"
                        value={modulename || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextValidator
                        variant="outlined"
                        label="module code "
                        onChange={handleChange}
                        type="text"
                        name="modulecode"
                        value={modulecode || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextValidator
                        variant="outlined"
                        label="module credits "
                        onChange={handleChange}
                        type="text"
                        name="modulecredits"
                        value={modulecredits || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth
                    />
                </Grid>
         
             
                <Grid item xs={6}>
                    <TextValidator
                        label="Year"
                        select
                        name="year"
                        variant="outlined"
                        value={year || ''}
                        validators={['required']}
                        onChange={handleChange}
                        fullWidth
                    >
                        {years_category.map((role) => (
                            <MenuItem
                                key={role.code}
                                value={role.name}
                            >
                                {role.name}
                            </MenuItem>
                        ))}
                    </TextValidator>
                </Grid>
                
                
            </Grid>
        </Grid>
        <Button
                    className="w-full"
                    color="primary"
                    variant="contained"
                    type="submit"
                >
                    Create
                </Button>
       
    </Grid>
</ValidatorForm>

{/* <PaymentDialog open={open} toggleDialog={toggleDialog} /> */}
</Card>}

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
  createUserAction: PropTypes.func.isRequired,
  createModuleAction:PropTypes.func.isRequired,
  updateModuleAction:PropTypes.func.isRequired,
  updateUserAction:PropTypes.func.isRequired,
  getUsersAction:PropTypes.func.isRequired,
  getModulesAction:PropTypes.func.isRequired,
  modules:PropTypes.array.isRequired,
  users:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.object,
  userError:PropTypes.object,
  stockOutError:PropTypes.object,
  stockReturnError:PropTypes.object,
};
Welcome.defaultProps = {
    createUserAction:  () => {},
    createModuleAction: () => {},
    updateModuleAction: () => {},
    updateUserAction: () => {},
    getUsersAction: () => {},
    getModulesAction: () => {},
    modules:[],
    users:[],
  loading:false,
  error:null,
  userError:null,
};
export const mapStateToProps = ({ user:{users,loading,userError} ,
    modules:{ modules,error,moduleError}}) => ({
  loading,error,moduleError,users,loading,userError,modules,error,
});
export const mapDispatchToProps = (dispatch) => ({
    createUserAction: bindActionCreators(userActions.signup , dispatch),
    // updateUserAction: bindActionCreators(userActions.update, dispatch),
    getUsersAction: bindActionCreators(userActions.getUsers, dispatch),
    // getModulesAction: bindActionCreators(stockActions.getStockreturnNumber, dispatch),
    // createModuleAction: bindActionCreators(stockActions.getStockins, dispatch),
    // updateModuleAction: bindActionCreators(stockActions.getStockouts, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
