export default {
  stock: {
    loading:false,
    error:null,
    stockInError:null,
    stockOutError:null,
    stockReturnError:null,
    stockIns:[],
    stockOuts:[],
    stockReturns:[],
    stockIn:{},
    stockOut:{},
    stockReturn:{},
    stockOutCreated:false,
    stockInCreated:false,
    stockReturnCreated:false,
    stockInUpdated:false,
    stockOutUpdated:false,
    StockReturnUpdated:false,
    stockInDeleted:false,
    stockOutDeleted:false,
    stockReturnDeleted:false,
    stockreturnNumber:0,
    stockinNumber:0,
    stockoutNumber:0,
  },
  auth:{
    isLoggedIn: false,
    role:"normal",
    loading: false,
    profile: null,
    authError: null
  },
  user: {
    userError: null,
    loading: false,
    user:null,
    users:[]
  },
  modules: {
    moduleError: null,
    moduleloading: false,
    module:null,
    modules:[]
  },
};
