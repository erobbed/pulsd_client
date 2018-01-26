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
      <Form style={{ width: "50%", margin: "0 auto" }}>
        <Form.Field>
          <Form.Input
            label="Event Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Event Times</label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeStart}
            showTimeSelect
            dateFormat="LLL"
          />
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
    );
  }
}

export default FormContainer;
