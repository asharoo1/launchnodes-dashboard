import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import api from "../../../api/contacts";
class AlertComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.validatorindex);
    const vIndex = `${this.props.validatorindex}`;
    const emailAdd = `${this.state.email}`;

    const checkUser = await api.get("/contacts");
    let check = 0;
    Object.keys(checkUser.data).map((keyName, i) => {
      if (
        vIndex === checkUser.data[keyName].vIndex &&
        emailAdd === checkUser.data[keyName].emailAdd
      ) {
        check++;
      }
    });

    if (check >= 1) {
      alert("User already subscribed");
    } else {
      const response = await api.post("/contacts", { vIndex, emailAdd });
      console.log(response);
    }
  };

  render() {
    return (
      <div>
        <Form className="col-lg-12 inputForm" onSubmit={this.handleSubmit}>
          <Input
            className="col-lg-8"
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Button
            style={{
              marginLeft: "5px",
              backgroundColor: "#5293ff",
              color: "#fcfcfc",
            }}
          >
            Send
          </Button>
        </Form>
      </div>
    );
  }
}

export default AlertComponent;
