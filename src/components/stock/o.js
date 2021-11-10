import React, {useEffect} from 'react';
import {Card,} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../../redux/actions/stock';

// eslint-disable-next-line no-undef
const  StockOutCard =(props)=> {
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
    <Card.Header>Total stock-out </Card.Header>
    <Card.Body>
      {/* <Card.Title>{'variant'} Card Title </Card.Title> */}
      <Card.Text>
        {props.stockoutNumber}
      </Card.Text>
    </Card.Body>
  </Card>
    );
}
StockOutCard .defaultProps = {
  stockoutNumber: 0,
};
StockOutCard .propTypes = {
  stockoutNumber: PropTypes.number,
  actions: PropTypes.object.isRequired,
};
export const mapStateToProps = ({stockoutNumber }) => (
  {
    stockoutNumber,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    getNumber: bindActionCreators(stockActions.getStockoutNumber, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(StockOutCard );