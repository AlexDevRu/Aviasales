import React from 'react'
import './Content.css';
import Ticket from './Ticket/Ticket';
import { setSortActionCreator, getTicketsThunkCreator } from '../../store/actionCreators'
import { connect } from 'react-redux'
import Sort from './Sort/Sort';
import Loader from '../common/Loader/Loader'

class Content extends React.Component {
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    return (
      <div className="content">
        <Sort setSort={this.props.setSort} sort={this.props.sort}/>

        {
           this.props.isLoading ? <Loader /> :
           this.props.tickets.length === 0 ? <p className="empty-list">No tickets</p> :
           this.props.tickets.map(
             (ticket, i) => <Ticket key={i} {...ticket}/>
           )
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  sort: state.sort,
  tickets: state.displayTickets,
  isLoading: state.isLoading
})

export default connect(mapStateToProps, {
  setSort: setSortActionCreator,
  getTickets: getTicketsThunkCreator
})(Content);
