import React from 'react'
import './Ticket.css';
import TicketData from './TicketData/TicketData';

const Ticket = (props) => {
  const price = props.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">
            {`${price} ₽`}
        </div>
        <div className="ticket__logo">
            <img src={`//pics.avs.io/99/36/${props.carrier}.png`} alt=""/>
        </div>
      </div>
      {
        props.segments.map(
          (seg, i) => <TicketData key={i} {...seg}/>
        )
      }   
    </div>
  );
}

export default Ticket;
