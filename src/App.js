import React from 'react'import { Route, Switch } from 'react-router-dom'import { MainPage, CameraPage, GridPage, AddPostPage } from './components/views'import Header from './components/commons/Header/Header'const RouteNoMatch = () => {  return <div>404 NOT FOUND</div>}function App() {  return (    <>      <Header />      <Switch>        <Route exact path="/" component={MainPage} />        <Route path="/camera" component={CameraPage} />        <Route path="/grid" component={GridPage} />        <Route path="/addPost" component={AddPostPage} />        <Route component={RouteNoMatch} />      </Switch>    </>  )}export default App