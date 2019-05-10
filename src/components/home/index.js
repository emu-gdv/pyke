import React, { Component } from "react";
import ".//home.scss";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Jumbotron,
  Row,
  CardDeck,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
  Table
} from "reactstrap";


const items = [
  {
    src: require("../../assets/images/home/web_dev.png"),
    altText: "Web Development",
    caption: "Project teaching React & Webpack, Devops, and CI"
  },
  {
    src: require("../../assets/images/home/game_dev.png"),
    altText: "Game Development",
    caption: "Projects using Unity to create modern game designs"
  },
  {
    src: require("../../assets/images/home/software_dev.jpg"),
    altText: "Software Development",
    caption: "Projects involving Java, exploring advanced concepts"
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} width="100%" alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
        <Container fluid className="home-carousel">
          <Row>
            <Col>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col sm="12">
              <h3 className="text-center mb-5">Commit Leaderboards</h3>
            </Col>
          </Row>
          <Row>
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Commit #</th>
                  <th>Github User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>432</td>
                  <td>taco-cat</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jessica</td>
                  <td>380</td>
                  <td>pocket-type</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>263</td>
                  <td>fire-spill</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <Jumbotron fluid className="text-center mt-5">
          <Container fluid>
            <h1 className="display-1">What do we do?</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis quam id rhoncus congue. Donec ut accumsan nisl, vitae
              fermentum enim. Nullam tristique rutrum orci, at placerat urna
              blandit a. Donec id auctor quam, quis placerat ligula. Quisque
              ultrices augue vel viverra hendrerit. Donec ornare odio et tortor
              volutpat gravida. Morbi at justo magna. Nulla est mauris, dictum
              ut neque a, venenatis accumsan leo. Integer eu quam eget turpis
              vestibulum porttitor quis in sem. Aenean malesuada, eros porta
              viverra pretium, dui diam scelerisque mi, vitae sollicitudin ex
              tortor a dolor. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae;
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <CardDeck className="pt-5">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
        <Jumbotron fluid className="text-center mt-5">
          <Container fluid>
            <h1 className="display-1 center">Fluid jumbotron</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis quam id rhoncus congue. Donec ut accumsan nisl, vitae
              fermentum enim. Nullam tristique rutrum orci, at placerat urna
              blandit a. Donec id auctor quam, quis placerat ligula. Quisque
              ultrices augue vel viverra hendrerit. Donec ornare odio et tortor
              volutpat gravida. Morbi at justo magna. Nulla est mauris, dictum
              ut neque a, venenatis accumsan leo. Integer eu quam eget turpis
              vestibulum porttitor quis in sem. Aenean malesuada, eros porta
              viverra pretium, dui diam scelerisque mi, vitae sollicitudin ex
              tortor a dolor. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae;
            </p>
          </Container>
        </Jumbotron>
        <Container className="pt-5">
          <ListGroup flush>
            <ListGroupItem disabled tag="a" href="#">
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Morbi leo risus
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Porta ac consectetur ac
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Vestibulum at eros
            </ListGroupItem>
          </ListGroup>
        </Container>
      </React.Fragment>
    );
  }
}
