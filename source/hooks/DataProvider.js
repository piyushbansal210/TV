import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

const DataProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((info) => {
        setData(info);
      })

  }, [])


  return (
    <DataContext.Provider value={{ data: data }}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
