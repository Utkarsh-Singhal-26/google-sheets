import React from "react";
import { useEffect } from "react";
import Tabletop from "tabletop.js";

const App = () => {
  const getData = async () => {
    const sheet = await Tabletop.init({
      key: import.meta.env.VITE_spreadsheetId,
      sheetName: 'Sheet1',
    });
  
    const data = await sheet.promise();
    console.log(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  return <div>App</div>;
};

export default App;
