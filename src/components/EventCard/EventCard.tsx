
import { EventCardProps } from '../../types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './eventCard.sass'

export default function EventCard(props:EventCardProps) {
  //reformate String

  /*
  const [date,time] = props.party.startTime.toString().split('T');
  const [hours,seconds] = time.split(".");
 
  const [endDate,endTime] = props.party.endTime.toString().split('T');
  const [endhours, endseconds] = endTime.split('.')
  */

  return (
    <Card style={{ width: '18rem' }} className="child">
    <Card.Img variant="top" src={props.party.flyerFront} />
    <Card.Body>
      <Card.Title>{props.party.title}</Card.Title>
      <Card.Text>
        <a href={props.party.venue.direction} target='_blank'>
          <b>{props.party.venue.name}</b></a>
        <br />Start Time:{props.party.startTime}
        <br />End Time:{props.party.endTime}
      </Card.Text>
      <Button variant="primary">Add to Basket</Button>
    </Card.Body>
  </Card>
  );
}
