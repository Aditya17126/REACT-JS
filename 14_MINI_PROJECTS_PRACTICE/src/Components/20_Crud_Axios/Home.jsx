import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>User Data</h1>
      <table
        border={1}
        cellPadding={6 }
        cellSpacing={10}
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <td>
              <h2>ID</h2>
            </td>
            <td>
              <h2>NAME</h2>
            </td>
            <td>
              <h2>PHONE</h2>
            </td>
            <td>
              <h2>ACTION</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((currElem) => {
            return (
              <tr key={currElem.id}>
                <td>
                  <h4>{currElem.id}</h4>
                </td>
                <td>
                  <h4>{currElem.name}</h4>
                </td>
                <td>
                  <h4>{currElem.phone}</h4>
                </td>
                <td>
                  <button>
                    <Link to="/create">Create</Link>
                  </button>
                  <button>READ</button>
                  <button>UPDATE</button>
                  <button>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
