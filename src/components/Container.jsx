import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import Spinner from './Spinner';
import Login from './Login';


const StyledContainer = styled.div`
  padding: 10px;
  nav {
    a {
      margin-right: 12px;
    }
    margin-bottom: 12px;
  }
`;

// 1- use react router to break the app into /quotes and /login paths.
// 2- create links to these paths.
// 3- protect the quotes path to check localStorage for userToken.
export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quotes">Quotes</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Route
          path="/quotes"
          render={() => (
            <Spinner>
              <Quotes />
              <QuoteForm />
            </Spinner>
          )}
        />

        <Route
          path="/login"
          render={() => (
            <Login />
          )}
        />

      </StyledContainer>
    </Router>
  );
}
