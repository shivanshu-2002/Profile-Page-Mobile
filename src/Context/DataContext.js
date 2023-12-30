// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [count , setCount ] = useState(0);
  const currUser = usersData[count];

  const handleNext = ()=>{
      if(count == 79){
          setCount(0)
       }else{
          setCount((prev)=>prev+1);
       }
  }
  const handlePrev = () => {
       if(count == 0){
          setCount(79)
       }else{
          setCount((prev)=>prev-1);
       }
    };

  useEffect(() => {
    // Fetch data from API
    fetch('https://random-data-api.com/api/users/random_user?size=80') //fetching 80 data
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once

  return (
    <DataContext.Provider value={{ usersData ,currUser,setCount,count ,handleNext,handlePrev}}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
