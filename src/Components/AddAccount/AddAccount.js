import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class AddAccount extends Component {
    state = {
        newAccount : {
            id: "",
            name: "",
            lastname: "",
            email: "",
            phone: ""
        }
    }
    changeHandler = (e) => {
        let id = e.target.id;
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = e.target.value;
        this.setState({
            newAccount : newAccountCopy
        });
    }
    passAccount = (account) => {
        this.props.addIntoAccounts(this.state.newAccount);
        this.setState(({
            newAccount : {
                id: "",
                name: "",
                lastname: "",
                email: "",
                phone: ""
            }
        }));
        this.props.history.push("/");
    }
    getLastId = () => {
        let account = 0;
        if(this.props.showAccounts.length !== 0) {
            account = this.props.showAccounts[this.props.showAccounts.length - 1].id + 1;
        }
        this.setState(({
            newAccount : {
                id: account,
                name: "",
                lastname: "",
                email: "",
                phone: ""
            }
        }));
    }
    componentDidMount() {
        this.getLastId();
    }
    render() {
        return (
            <div>
                <div className="row view" id="addAccount">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Add Accounts</h2>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <input type="text" placeholder="ID" disabled = "disabled" defaultValue = {this.state.newAccount.id} className="form-control" id="id"/>
                                <input type="text" placeholder="Name" onChange={this.changeHandler} className="form-control" id="name"/>
                                <input type="text" placeholder="Lastname" onChange={this.changeHandler} className="form-control" id="lastname"/>
                                <input type="text" placeholder="E-Mail" onChange={this.changeHandler} className="form-control" id="email"/>
                                <input type="text" placeholder="Phone" onChange={this.changeHandler} className="form-control" id="phone"/>
                                <button className="btn btn-dark mt-3 save" onClick={this.passAccount}>Add Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddAccount);
