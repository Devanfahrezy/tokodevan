import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sukses" component={Sukses} />
            </Switch>
            <center><h1>  About </h1>
            <p> Toko ini menjual berbagai macam sepatu sport dan casual. Siap sedia melayani anda 24 jam.</p>
            <p> Alamat toko = Jalan Kebangsaan Timur No. 78 Bandung </p>
            <p> IG @Sportaways  </p>
            <p> Hub. 087865432213  </p></center>
            </main>
      </BrowserRouter>
    )
  }
}
