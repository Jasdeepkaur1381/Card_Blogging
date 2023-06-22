import React, { useState } from 'react';
import "./App.css";
import Navbarh from './components/Navbarh';

// import data from "../src/memory/data"

const App = () => {
  const [inputValueList, setInputValueListWork] = useState([]);


  const setInputValueList = (inputValue, selectedOption) => {
    setInputValueListWork((preVal) => {
      console.log(inputValue);
      return ([...preVal, {
        id: preVal.length + 1,
        name: inputValue,
        color: selectedOption,
      }]);
    })
  };
  return (
    <>
      <Navbarh onsetInputValueList={setInputValueList} />
      <h1 className='text-center text-xl'>My boards</h1>
      <div className='flex flex-row w-full flex-start p-5'>

        {inputValueList.map(({ id, name, color }) => {
          return (
            <div className='w-30px h-20 outline-1 border-2 m-5 ' style={{ "backgroundColor": color }}>
              <div className='w-20 h-20'></div>
              {name}</div>

          );
        })}

      </div>
    </>
  );
};

export default App;
// style={{"backgroundColor": color}}