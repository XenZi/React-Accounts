import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Accounts from "./Components/Accounts/Accounts";
import AddAccount from './Components/AddAccount/AddAccount';
import EditAccount from './Components/EditAccount/EditAccount';
class App extends Component {
    state = {
        accounts: [
        ],
        account : {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }
    componentDidMount() {
        let arr = [];
        if(localStorage.arr) {
            arr = JSON.parse(localStorage.arr)
        }
        this.setState({
            accounts: arr
        })
    }
    addIntoAccounts = (account) => {
        let copyAccounts = [...this.state.accounts, account];
        localStorage.arr = JSON.stringify([...this.state.accounts, account]);
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
        localStorage.arr = JSON.stringify([...this.state.accounts]);
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
        localStorage.arr = JSON.stringify([...this.state.accounts, acc]);
    }
    getId = (id) => {
        let index = 0;
        for(let i=0;i<this.state.accounts.length;i++) {
            if(this.state.accounts[i].id === id) {
                index = i;
            }
        }
        let copyAccounts = this.state.accounts.splice(index, 1);
        copyAccounts = [...this.state.accounts];
        copyAccounts.sort((a,b) => a.id - b.id);
        this.setState(({
            accounts: copyAccounts
        }));
        localStorage.arr = JSON.stringify([...this.state.accounts]);
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Navbar />
                    <Route path="/" exact>
                        <Accounts showAccounts = {this.state.accounts} getDetails = {this.getDetails}  getId = {this.getId} />
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
