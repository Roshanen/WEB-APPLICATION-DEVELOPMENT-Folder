import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const buttonStyle = {
  margin: "0 5px",
  maxHeight:"40px",
  padding: "10px"
}

class Button extends React.Component {

  onTrigger = () => {
    if (this.props.name === "Vote") {
      this.props.parentCallBack(1);
    } else {
      this.props.parentCallBack(-1);
    }
  };

  render() {
    return (
      <>
        <button className="clickButton" type="button" style={buttonStyle} onClick={this.onTrigger}>
          Click to {this.props.name}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  parentCallBack: PropTypes.func,
};

export default Button;
