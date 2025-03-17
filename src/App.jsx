import React, { useEffect } from "react";
import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Resource } from "react-admin";
import { Admin } from "@react-admin/ra-enterprise";
import { dataProvider } from "./dataProvider";
import CustomList from "./CustomList";

function App() {
  return (
    <Admin dataProvider={dataProvider} loginPage={false}>
      <Resource key="athletes" name="athletes" list={CustomList} />
    </Admin>
  );
  // return <>Melih</>;
}

export default App;
