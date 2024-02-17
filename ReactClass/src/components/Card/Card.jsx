import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.css";

class Card extends React.Component {
  state = {
    count: this.props.count || 0,
    display:
      this.props.count <= 0
        ? "Min"
        : this.props.count >= 10
        ? "Max"
        : this.props.count,
    addMedia: "",
  };

  updateDimensions = () => {
    if (window.innerWidth <= 960){
      this.setState({ addMedia: "Adapt"});
    }
    else {
      this.setState({ addMedia: ""});
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  handleCallBack = (childData) => {
    let newCount = this.state.count + childData;

    if (newCount > 10) {
      // newCount = 10;
      alert("Cannot Vote more");
    } else if (newCount < 0) {
      // newCount = 0;
      alert("Cannot unvote");
    } else {
      this.state.count = newCount;
    }

    if (newCount >= 10) {
      this.setState({ display: "Max" });
    } else if (newCount <= 0) {
      this.setState({ display: "Min" });
    } else {
      this.setState({ display: this.state.count });
    }
  };

  render() {
    return (
      <div className="foodCard" key={this.props.id}>
        <div className="cardContent">
          <img
            className={"foodImg" + this.state.addMedia}
            src={this.props.imgUrl}
            alt={"รูป" + this.props.name}
            width="200px"
          />
          <h2 className="foodType">{this.props.type}</h2>
          <h3 className="foodName">{this.props.name}</h3>
          <p className={"foodInfo"  + this.state.addMedia}>{this.props.info}</p>
        </div>
        <div className="buttonGroup">
          <Button name="Vote" parentCallBack={this.handleCallBack}></Button>
          <h2 className="display">{this.state.display}</h2>
          <Button name="Unvote" parentCallBack={this.handleCallBack}></Button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  imgUrl: PropTypes.string,
  count: PropTypes.number,
};

export default Card;
