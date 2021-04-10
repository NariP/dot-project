import React from 'react'import { Route, Switch } from 'react-router-dom'import { MainPage, CameraPage } from './components/views'const RouteNoMatch = () => {  return <div>404 NOT FOUND</div>}function App() {  return (    <Switch>      <Route exact path="/" component={MainPage} />      <Route exact path="/camera" component={CameraPage} />      <Route component={RouteNoMatch} />    </Switch>  )}export default App