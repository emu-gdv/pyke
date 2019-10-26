import React, { Component } from "react";
import ".//home.scss";
import home_left from "../../assets/images/home/home_left.png";
import home_right from "../../assets/images/home/home_right.png";
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row,
  Table
} from "reactstrap";
import { Link } from "react-router-dom";


const items = [
  {
    src: require("../../assets/images/home/software_dev.jpg"),
    altText: "Software Development",
    caption: "Collaborate with other students, mentors, and community professionals while developing and learning new skills"
  },
  {
    src: require("../../assets/images/home/software_dev.jpg"),
    altText: "Recruiting Artists",
    caption: "Are you an Artist or Designer? Consider joining to help with project prototypes, mock-ups, and game design"
  },
  {
    src: require("../../assets/images/home/game_dev.png"),
    altText: "Game Development",
    caption: "Help design, develop, and implement games in Unity. Learn game development and contribute at any level"
  },
  {
    src: require("../../assets/images/home/web_dev.png"),
    altText: "Web Development",
    caption: "Learn various aspects of Web Development, web design, and web-app development"
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
          <img src={item.src} width="100%" alt={item.altText}/>
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
        <Container className="home-cards">
          <Row>
            <Col className="sm-12 pt-3">
              <h3 className="home-cards-title text-center">SGW Development</h3>
            </Col>
          </Row>
          <CardDeck className="pt-3">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://images.unsplash.com/photo-1484504110495-939e9baca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="card-title text-center h5">Our Team</CardTitle>
                <CardSubtitle className="card-subtitle h6 pt-2">About Us:</CardSubtitle>
                <CardText className="card-text-height text-center">
                  Our Student organization is an ambitious group of students from EMU who collaborate together on
                  passion projects, as well as learning new skills
                </CardText>
                <Button className="card-button d-block m-auto">
                  <Link exact to="/about-us">
                    Learn More
                  </Link>
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://images.unsplash.com/photo-1484504110495-939e9baca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="card-title text-center h5">Projects</CardTitle>
                <CardSubtitle className="card-subtitle h6 pt-2">Current:</CardSubtitle>
                <CardText className="card-text-height text-center">
                  We are engaged in a multitude of projects, spanning multiple disciplines. See what we are up to
                  currently!
                </CardText>
                <Button className="card-button d-block m-auto">
                  <Link exact to="/projects">
                    See Projects
                  </Link>
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://images.unsplash.com/photo-1484504110495-939e9baca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="card-title text-center h5">Join Our Team</CardTitle>
                <CardSubtitle className="card-subtitle h6 pt-2">Contact Us:</CardSubtitle>
                <CardText className="card-text-height text-center">
                  We are always accepting new members, regardless of skill level. Follow the link to join our Student
                  Organization
                </CardText>
                <Button className="card-button d-block m-auto">
                  <Link exact to="/join-now">
                    Join Now
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
        <Jumbotron fluid className="text-center mt-5 home-about">
          <Container fluid>
            <h1 className="display-1">What do we do?</h1>
            <p className="lead">
              We are a new and growing student organization dedicated to exploring new subjects and topics throughout
              multiple fields including computer science, graphic design, web development, animation, and game
              development. This is a multi-disciplinary student organization that seeks to expand and utilize knowledge
              that we have gained to create and develop useful projects. We work with industry professionals to provide
              networking, mentorship programs, symposium events, and possible internships.
            </p>
          </Container>
        </Jumbotron>
        <Container className="pt-5">
          <Row>
            <Col sm="6">
              <img src={home_left} width="100%" alt="sgw dev"/>
            </Col>
            <Col sm="6">
              <h3 className="text-center pt-3">Test</h3>
              <p className="text-center pt-3">Test</p>
            </Col>
          </Row>
        </Container>
        <Jumbotron fluid className="text-center mt-5 home-jumbo">
          <Container fluid>
            <h1 className="display-1 center">Our Mission</h1>
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
          <Row>
            <Col sm="6">
              <h3 className="text-center pt-3">Test</h3>
              <p className="text-center pt-3">Test</p>
            </Col>
            <Col sm="6">
              <img src={home_left} width="100%" alt="sgw dev"/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
