import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [postData, setPos] = useState([]);
  useEffect(() => {
    const getPostDataList = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`); //await  expression to wait for the promises to return
      //console.log(res);
      setPos(res);
    };
    getPostDataList();
  }, []); //passing an empty array as 2nd argument to useEffect causes the hook to only be run once when the component first loads.

  const getPostData = () => {
    return (
      postData &&
      postData.data &&
      postData.data.map((data, index) => {
        return (
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <table border="1">
        <tr>
          <th>serial id</th>
          <th>title</th>
          <th>Body</th>
        </tr>
        {getPostData()}
      </table>
    </>
  );
};

export default App;
