import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Accounts from "./Components/Accounts/Accounts";
import AddAccount from './Components/AddAccount/AddAccount';
import EditAccount from './Components/EditAccount/EditAccount';
class App extends Component {
    state = {
        accounts: [
            {
                id: 0,
                name: "Marko",
                lastname: "Aleksic",
                phone: "111-11",
                email: "markoaleksic@lawoffice.com"
            },
            {
                id: 1,
                name: "Jovan",
                lastname: "Milovanovic",
                phone: "111-11",
                email: "milovanovicjovan@lawoffice.com"
            }
        ],
        account : {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }
    addIntoAccounts = (account) => {
        let copyAccounts = [...this.state.accounts, account];
        this.setState({
            accounts: copyAccounts
        });
    }
    getDetails = (id) => {
        let copyAccounts = [...this.state.accounts];
        let acc = copyAccounts.filter(account => account.id === id);
        acc = acc[0];
        this.setState(({
            account: {
                id: acc.id,
                name: acc.name,
                lastname: acc.lastname,
                phone: acc.phone,
                email: acc.email
            }
        }));
    }
    getAccount = (acc) => {
        let index = 0;
        for(let i=0;i<this.state.accounts.length;i++) {
            if(this.state.accounts[i].id === acc.id) {
                index = i;
            }
        }
        let copyAccounts = this.state.accounts.splice(index, 1);
        copyAccounts = [...this.state.accounts, acc];
        copyAccounts.sort((a,b) => a.id - b.id);
        this.setState(({
            accounts: copyAccounts
        }));
    }
    getId = () => {
        console.log("ID");
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Navbar />
                    <Route path="/" exact>
                        <Accounts showAccounts = {this.state.accounts} getDetails = {this.getDetails}  />
                    </Route>
                    <Route path="/add">
                        <AddAccount showAccounts = {this.state.accounts} addIntoAccounts = {this.addIntoAccounts}/>
                    </Route>
                    <Route path="/edit">
                        <EditAccount editAccount={this.state.account} getAccount={this.getAccount} />
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
