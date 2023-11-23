import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const fetcher = await axios.get("http://localhost:8080/api/user");
      console.log(fetcher.data.users);
      setData(fetcher.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    document.title = "All Users || Page";
    getData();
  }, []);
  return (
    <main className="container">
      <h2>All Users</h2>
      {/* {isLoading && <Spinner animation="border" />} */}
      <div className="container pt-5 row justify-content-between align-items-center gap-4">
        {data && data.length < 1 ? (
          <h1 className="text-primary">No Users yet.....create one</h1>
        ) : (
          data.map((datum) => {
            const { _id, name, email, gender, profession } = datum;

            return (
              <div key={_id} className="card col-lg-5 p-3 shadow-sm">
                <Link
                  className="text-decoration-none"
                  to={`/SingleUser/${_id}`}
                >
                  <h2>{name}</h2>
                  <p>{email}</p>
                  <p>{gender}</p>
                  <p>{profession}</p>
                  <span className="text-success">
                    Click to see more .......
                  </span>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default AllUsers;
