import React from "react";
import { Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class FormContainer extends React.Component {
  state = {
    name: "",
    startDate: moment(),
    endDate: moment()
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  handleChange = (e, { value }) => {
    this.setState({
      name: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="form">Create a New Event</h1>
        <Form className="form">
          <Form.Field>
            <Form.Input
              label="Event Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Start</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              showTimeSelect
              dateFormat="LLL"
            />
            <label>Event End</label>
            <DatePicker
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
              showTimeSelect
              dateFormat="LLL"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default FormContainer;
