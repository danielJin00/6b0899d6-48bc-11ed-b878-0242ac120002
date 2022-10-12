import { useState } from "react";
import {
    Navbar,
    Container,
    Form,
    Button,
    Offcanvas,
    Card,
    Badge,
} from "react-bootstrap";
//@ts-ignore
import shoppingCartIcon from "../../assets/shoppingCart.png";
import { Event } from "../../types";

function Header(props: {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setSortedData: React.Dispatch<React.SetStateAction<Event[] | null>>;
    sortedData: Event[] | null;
}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const eventsInCart = props.sortedData?.filter((event) => event.inCart);
    return (
        <Navbar bg="primary" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Form className="d-flex flex-grow-1">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => props.setQuery(e.target.value)}
                        />
                    </Form>
                </Navbar.Brand>
                <Button variant="primary" onClick={handleShow}>
                    <img
                        src={shoppingCartIcon}
                        style={{ height: "30px", width: "30px" }}
                        alt="cart"
                    />
                    <Badge bg="danger">{eventsInCart?.length}</Badge>
                </Button>
                <Offcanvas placement="end" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shoppincart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {props.sortedData?.map(
                            (event) =>
                                event.inCart && (
                                    <Card>
                                        <Card.Header>{event.date}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                {event.title}
                                            </Card.Title>
                                            <Card.Text></Card.Text>
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    if (props.sortedData) {
                                                        const items =
                                                            props.sortedData.filter(
                                                                (item) =>
                                                                    item._id !==
                                                                    event._id
                                                            );
                                                        event.inCart = false;
                                                        items.push(event);
                                                        props.setSortedData(
                                                            items
                                                        );
                                                    }
                                                }}
                                            >
                                                Remove from basket
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                )
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
