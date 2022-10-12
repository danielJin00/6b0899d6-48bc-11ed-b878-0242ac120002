import React from "react";
import { Card, Button } from "react-bootstrap";
import { Event } from "../../types";

function EventCard(props: {
    event: Event;
    setSortedData: React.Dispatch<React.SetStateAction<Event[] | null>>;
    sortedData: Event[] | null;
}) {
    //get time from date
    function setStart() {
        if (!props.event.startTime) {
            return null;
        } else {
            const Start = props.event.startTime?.split(/[T,.]/);
            return Start[1];
        }
    }
    function setEnd() {
        if (!props.event.endTime) {
            return null;
        } else {
            const End = props.event.endTime?.split(/[T,.]/);
            return End[1];
        }
    }

    return (
        <div className="child">
            <Card style={{ width: "20rem" }} className="child">
                <Card.Img variant="top" src={props.event.flyerFront} />
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        <a
                            href={props.event.venue.direction}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>{props.event.venue.name}</b>
                        </a>
                        <br />
                        Start Time : {setStart()}
                        <br />
                        End Time : {setEnd()}
                    </Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => {
                            if (props.sortedData) {
                                const items = props.sortedData.filter(
                                    (item) => item._id !== props.event._id
                                );
                                props.event.inCart = true;
                                items.push(props.event);
                                props.setSortedData(items);
                            }
                        }}
                    >
                        Add to Basket
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EventCard;
