import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [pos, setPos] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  console.log(pos);

  const getData = () => {
    if (searchText != "") {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: searchText,
        })
        .then((response) => setPos(response.data.id));
    }
  };
  return (
    <div className="bbody">
      Title:
      <input
        type="text"
        name="fname"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <input type="button" value="search" onClick={getData} />
      pos: {pos}
      {/* <div className="cbody">Posts : {pos}</div> */}
    </div>
  );
};

export { App };

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [pos, setPos] = useState(null);

//   const getData = () =>
//     fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
//       res.json()
//     );

//   useEffect(() => {
//     getData().then((pos) => setPos(pos));
//   }, []);

//   return (
//     <>
//       <table border="1">
//         <tr>
//           <td>ID</td>
//           <td>TITLE</td>
//           <td>BODY</td>
//         </tr>

//         {pos?.map((item) => (
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// };

// export default App;

//   const getPostData = () => {
//     return (
//       pos &&
//       pos.data &&
//       pos.data.map((data, index) => {
//         return (
//           <tr>
//             <td>{data.id}</td>
//             <td>{data.title}</td>
//             <td>{data.body}</td>
//           </tr>
//         );
//       })
//     );
//   };

//   return (
//     <>
//       <table border="1">
//         <tr>
//           <th>serial id</th>
//           <th>title</th>
//           <th>Body</th>
//         </tr>
//         {getPostData()}
//       </table>
//     </>
//   );
// };

// export default App;
