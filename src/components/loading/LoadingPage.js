import React from "react";
import ReactDOM from "react-dom";

const loadingRoot = document.getElementById("loading-root");
export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    loadingRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    loadingRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="loading">
        <div className="custom-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>,
      this.el
    );
  }
}
