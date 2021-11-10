import React, {useEffect} from 'react';
import {Card,} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../../redux/actions/stock';

// eslint-disable-next-line no-undef
export const StockInCard  =(props)=> {

    useEffect(() => {
      // if (!localStorage.getItem('token')) return;
      console.log("get in actions",props)
      props.getNumber();
        //  this.intervalId = setInterval(() => this.props.actions.getNotifications(), 1000);
    },[])
    return (

  <Card
     bg={"primary"}
     style={{ width: '15rem',height:'7rem' }}
     className="mb-2"
  >
    <Card.Header>total Items Available</Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
       {props.stockinNumber}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}

StockInCard.defaultProps = {
  stockinNumber: 0,
  getNumber:() => {},
};
StockInCard.propTypes = {
  stockinNumber: PropTypes.number,
  getNumber:PropTypes.func.isRequired,
};
export const mapStateToProps = ({stock:{stockinNumber}}) => (
  {
    stockinNumber
  }
);
export const mapDispatchToProps = (dispatch) => ({
    getNumber: bindActionCreators(stockActions.getStockinNumber, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(StockInCard );