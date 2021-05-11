import React from "react";
import ReactDOM from "react-dom";

import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
const App: React.FC = () => {
  return (
    <div>
      <h2>Props</h2>
      <Parent />
      <hr />
      <h2>state</h2>
      <GuestList />
      <hr />
      <UserSearch />
      <hr />
      <h2>Events</h2>
      <EventComponent />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
