import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class EditAccount extends Component {
    state = {
        account : {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }
    componentDidMount() {
        this.setState(({
            account: {
                id: this.props.editAccount.id,
                name: this.props.editAccount.name,
                lastname: this.props.editAccount.lastname,
                phone: this.props.editAccount.phone,
                email: this.props.editAccount.email
            }
        }));
    }
    changeHandler = (e) => {
        let id = e.target.id;
        let newAccountCopy = {...this.state.account};
        newAccountCopy[id] = e.target.value;
        this.setState(({
            account : newAccountCopy
        }))
    }
    passAccount = (acc) => {
        this.props.getAccount(this.state.account);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
            <div className="row view" id="addAccount">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Accounts</h2>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <input type="text" placeholder="ID" disabled="disabled" value = {this.state.account.id} onChange = {this.changeHandler} className="form-control" id="id"/>
                            <input type="text" placeholder="Name" value = {this.state.account.name} onChange = {this.changeHandler} className="form-control" id="name"/>
                            <input type="text" placeholder="Lastname" value = {this.state.account.lastname} onChange = {this.changeHandler} className="form-control" id="lastname"/>
                            <input type="text" placeholder="E-Mail" value = {this.state.account.email} onChange = {this.changeHandler} className="form-control" id="email"/>
                            <input type="text" placeholder="Phone" value = {this.state.account.phone} onChange = {this.changeHandler} className="form-control" id="phone"/>
                            <button className="btn btn-dark mt-3 save" onClick={this.passAccount}>Add Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(EditAccount);
