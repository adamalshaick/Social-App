import React from "react";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Global Chat</div>
                <hr />
                <div className="messages" />
                <div className="footer">
                  <TextAreaFieldGroup
                    placeholder="Short Bio"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                    info="Tell us a little about yourself"
                  />
                  <br />
                  <button className="btn btn-primary form-control">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
