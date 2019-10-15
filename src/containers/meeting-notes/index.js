import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import MeetingNotes from "../../components/meeting-notes";

export default class MeetingNotesContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <MeetingNotes/>
        <Footer/>
      </React.Fragment>
    );
  }
}
