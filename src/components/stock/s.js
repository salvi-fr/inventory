import React, { useState ,useEffect} from 'react';
// import sendAsync from '../../message-control/renderer';
import {Card} from 'react-bootstrap';

const  Stock =()=> {
    const [stockTotal, setStockTotal] = useState(0);
    // useEffect(() => {
    //   const a =async ()=>{
    //     sendAsync('SELECT COUNT(*) as count  from STOCK WHERE QUANTITY  ').then((r) => setStockTotal(r[0].count))}
    //     a()
    // },[]);
    return (
<Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total items </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        {stockTotal}
      </Card.Text>
    </Card.Body>
  </Card>
  
    );
}
export default Stock