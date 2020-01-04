import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-materialize';

class MaterialTimer extends React.Component {
  constructor(props) {
    super(props);
    this.targetDate = props.targetDate;
    this.state = {
      time: this.tick()
    }
  }

  componentDidMount() {
    this.tickAway();
  }

  tickAway() {
    setInterval(_ => this.setState({time: this.tick()}), 1000);
  }

  tick() {
    const diff = this.targetDate - Date.now();
    const days = diff / 1000 / 60 / 60 / 24;
    const hours = ((diff/ 1000 / 60 / 60 / 24) - Math.floor(days)) * 24;
    const minutes = (hours - Math.floor(hours)) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;
    const time = {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds)
    }
    return time;
  }

  render() {
    return (<Row>
      <Col s={3}>
        <Card
          className="teal"
          title={`${this.state.time.days}`}
          textClassName="white-text">
          <span className="white-text">
            Days
          </span>
        </Card>
      </Col>
      <Col s={3}>
        <Card
          className="teal"
          title={`${this.state.time.hours}`}
          textClassName="white-text">
          <span className="white-text">
            Hours
          </span>
        </Card>
      </Col>
      <Col s={3}>
        <Card
          className="teal"
          title={`${this.state.time.minutes}`}
          textClassName="white-text">
          <span className="white-text">
            Minutes
          </span>
        </Card>
      </Col>
      <Col s={3}>
        <Card
          className="teal"
          title={`${this.state.time.seconds}`}
          textClassName="white-text">
          <span className="white-text">
            Seconds
          </span>
        </Card>
      </Col>

    </Row>)
  }
}


export default MaterialTimer;