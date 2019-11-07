import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PostsScene from "./scenes/posts";
import PostScene from "./scenes/post";
import Navbar from "./components/organisms/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/organisms/footer';

function App() {
  return (
    <div className="container react-hn-container">
      <BrowserRouter>
        <Navbar />

        <Route
          exact
          path={["/", "/news", "/news/:page"]}
          component={({ match }) => <PostsScene postsSection={'news'} page={match.params.page} />} />


        <Route
          exact
          path={["/newest", "/newest/:page"]}
          component={({ match }) => <PostsScene postsSection={'newest'} page={match.params.page} />} />


        <Route
          exact
          path={["/ask", "/ask/:page"]}
          component={({ match }) => <PostsScene postsSection={'ask'} page={match.params.page} />} />


        <Route
          exact
          path={["/show", "/show/:page"]}
          component={({ match }) => <PostsScene postsSection={'show'} page={match.params.page} />} />

        <Route
          exact
          path={["/jobs", "/jobs/:page"]}
          component={({ match }) => <PostsScene postsSection={'jobs'} page={match.params.page} />} />

        <Route
          exact
          path={["/post/:id"]}
          component={({ match }) => <PostScene postId={parseInt(match.params.id)} />} />


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
