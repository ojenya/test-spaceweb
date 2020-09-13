import React from 'react'
import logo from '../logo.svg';
import {
    Support,
    Account,
    VPS,
    Domains,
    ContentHeader,
    Maintance} from './'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const Main = (props) => {
    const list = props.list
    return (
        <>
        <Router>
            <main className="main">
                <nav className="nav">
                    <div className="logo">
                        <Link to="/test-spaceweb/">
                            <img src={logo} alt="Логотип" width="100%"/>
                        </Link>
                    </div>

                    <ul>
                        <NavLink to="/account" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#F7FAFB"
                        }}>
                            Аккаунт
                        </NavLink>

                        <NavLink to="/vps" 
                        activeStyle={{
                        fontWeight: "bold",
                        color: "#F7FAFB"
                        }}>
                            VPS
                        </NavLink>

                        <NavLink to="/domains" activeStyle={{
                        fontWeight: "bold",
                        color: "#F7FAFB"
                        }}>
                            Домены
                        </NavLink>

                        <NavLink to="/support" activeStyle={{
                        fontWeight: "bold",
                        color: "#F7FAFB"
                        }}>
                            Поддержка
                        </NavLink>
                    </ul>
                </nav>

                <div className="conent">
                    <ContentHeader/>
                    <Switch>
                        <Route path="/account">
                            <Account list={list}/>
                        </Route>
                        <Route path="/vps">
                            <VPS list={list}/>
                        </Route>
                        <Route path="/domains">
                            <Domains list={list}/>
                        </Route>
                        <Route path="/support">
                            <Support list={list}/>
                        </Route>
                        <Route path="/test-spaceweb/">
                            <Maintance list={list}/>
                        </Route>
                        
                    </Switch>
                </div>
            </main>
        </Router>
        </>
    )
}



export default Main
