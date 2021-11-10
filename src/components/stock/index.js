import React, { useState ,useEffect} from 'react';
import sendAsync from '../../message-control/renderer';

import {Card,} from 'react-bootstrap';

// eslint-disable-next-line no-undef
export const StockInCard  =()=> {
    const [stockInTotal, setStockInTotal] = useState(0);


    useEffect(() => {
        sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "in_stock"').then((re) => setStockInTotal(re[0].count))
    });
    return (

  <Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total stock-in</Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
       {stockInTotal}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}

export const  StockOutCard =()=> {
    const [stockOutTotal, setStockOutTotal] = useState(0);

    useEffect(() => {
        sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "out_stock"').then((res) => setStockOutTotal(res[0].count))
    });

    return (

  <Card
    bg={"primary"}
    style={{ width: '15rem',height:'7rem' }}
    className="mb-2"
  >
    <Card.Header>Total stock-out </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        {stockOutTotal}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}

export const  StockReturnCard =()=> {
    const [stockReturnTotal, setStockReturnTotal] = useState(0);

    useEffect(() => {
        sendAsync('SELECT COUNT(*) as count  from STOCK WHERE status= "return_stock"').then((result) => setStockReturnTotal(result[0].count))
    });


    return (

  <Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>Total returns </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
       {stockReturnTotal}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}

export const  StockTotalCard =()=> {
    const [stockTotal, setStockTotal] = useState(0);
    useEffect(() => {
        sendAsync('SELECT COUNT(*) as count  from STOCK ').then((r) => setStockTotal(r[0].count))
    });
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