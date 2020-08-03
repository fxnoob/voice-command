import React from "react";
import webgazer from "webgazer.js";
import Appbar from "../../components/Appbar";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(webgazer);
  }

  render() {
    return (
      <React.Fragment>
        <Appbar />
      </React.Fragment>
    );
  }
}
