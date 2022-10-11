
import { EventCardProps } from '../../types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EventCard.css'

export default function EventCard(props:EventCardProps) {
  return (
    <Card style={{ width: '18rem' }} className="child">
    <Card.Img variant="top" src={props.party.flyerFront} />
    <Card.Body>
      <Card.Title>{props.party.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}
