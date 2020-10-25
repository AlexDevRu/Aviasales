import React from 'react'
import './TicketData.css';
import {
  getDurationFromMinutes,
  transplants
} from '../../../../utils/utils'
import Moment from 'react-moment';

const TicketData = (props) => {
  return (
      <div className="ticket__data">
        <div className="ticket__item">
            <div className="ticket__top">{ `${props.origin}-${props.destination}` }</div>
            <div className="ticket__bottom">
              <Moment date={props.date} format="hh:mm" />
              &nbsp;-&nbsp;
              <Moment date={props.date} add={{ minutes: props.duration }} format="hh:mm" />
            </div>
        </div>
        <div className="ticket__item">
            <div className="ticket__top">в пути</div>
            <div className="ticket__bottom length">
              { getDurationFromMinutes(props.duration) }
            </div>
        </div>
        <div className="ticket__item">
            <div className="ticket__top">
              { transplants(props.stops.length) }
            </div>
            <div className="ticket__bottom">
              { props.stops.join(', ') }
            </div>
        </div>
      </div>
  );
}

export default TicketData;
