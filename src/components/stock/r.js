import React, {useEffect} from 'react';
import {Card,} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../../redux/actions/stock';

const  StockReturnCard =(props)=> {
  useEffect(() => {
    // if (!localStorage.getItem('token')) return;
    console.log("actions",props.actions.getNumber)
    props.actions.getNumber();
      //  this.intervalId = setInterval(() => this.props.actions.getNotifications(), 1000);
  },[])
        
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
       {props.stockreturnNumber}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}
StockReturnCard.defaultProps = {
  stockreturnNumber: 0,
};
StockReturnCard.propTypes = {
  stockreturnNumber: PropTypes.number,
  actions: PropTypes.object.isRequired,
};
export const mapStateToProps = ({stockreturnNumber }) => (
  {
    stockreturnNumber,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    getNumber: bindActionCreators(stockActions.getStockreturnNumber, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(StockReturnCard);