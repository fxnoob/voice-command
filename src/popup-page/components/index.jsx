import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Appbar from "../../components/Appbar";
import C from "../../../constants";

const settingPage = chrome.runtime.getURL("option.html") + "?page=settings";

export default class PopupPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ width: "300px", height: "300px" }}>
        <Appbar />
        <Container maxWidth="sm">
          <Button
            onClick={e => {}}
            style={{
              marginTop: "1rem",
              backgroundColor: C.theme.color.secondary
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              href={settingPage}
            >
              Settings
            </a>
          </Button>
          <p>
            To use it. Just look at the content of a webpage and say your
            command!
          </p>
        </Container>
      </div>
    );
  }
}
