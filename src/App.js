import { useState, useEffect } from "react";
import { spaceId, graphQLULR, accessToken } from './Const';
import './App.css';
const { REACT_APP_CONTENTFUL_ENV } = process.env;

const pageQuery = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`
const userQuery = `
{
  userCollection {
    items {
      name
      email
      mobile
    }
  }
}
`
function App() {

  const [page, setPage] = useState(null);
  const [users, setUsers] = useState(null);
  const url = `${graphQLULR}content/v1/spaces/${spaceId}/environments/${REACT_APP_CONTENTFUL_ENV}`;

  useEffect(() => {
    getPage();
    getUser();
  }, []);

  const getPage = async() => {
    window
    .fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${accessToken}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query: pageQuery }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      setPage(data.pageCollection.items[0]);
    });
  }

  const getUser = () => {
    window
    .fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${accessToken}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query: userQuery }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      setUsers(data.userCollection.items)
    });
  }

  // show a loading screen case the data hasn't arrived yet
  if (!page || !users) {
    return "Loading...";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>{page.title}</p>
      </header>
      <section>
        { 
          users.map((user, index) => {
            return (
              <div key={index} className="UserInfo">
                <p>Name : {user.name}</p>
                <p>Mobile : {user.mobile}</p>
                <p>Email : {user.email}</p>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
