import React from 'react';
import { CssClasses } from '../common/css';
import {
  Card,
  CardPanel,
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
    this.color = props.color || CssClasses.Theme.SecondaryColor;
  }

  componentDidMount () {
    this.interval = setInterval(_ => this.setState({ time: this.tick() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); 
  }
  
  tick() {
    const diff = this.targetDate - Date.now();
    const days = diff / 1000 / 60 / 60 / 24;
    const hours = ((diff / 1000 / 60 / 60 / 24) - Math.floor(days)) * 24;
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
      <Col s={6} m={3}>
        <CardPanel className={this.color}>
          <h5>
            {this.state.time.days}
          </h5>
          <span>
            Days
          </span>
        </CardPanel>
      </Col>
      <Col s={6} m={3}>
        <CardPanel className={this.color}>
          <h5>
            {this.state.time.hours}
          </h5>
          <span>
            Hours
          </span>
        </CardPanel>
      </Col>
      <Col s={6} m={3}>
        <CardPanel className={this.color}>
          <h5>
            {this.state.time.minutes}
          </h5>
          <span>
            Minutes
          </span>
        </CardPanel>
      </Col>
      <Col s={6} m={3}>
        <CardPanel className={this.color}>
          <h5>
            {this.state.time.seconds}
          </h5>
          <span>
            Seconds
          </span>
        </CardPanel>
      </Col>

    </Row>)
  }
}


export default MaterialTimer;