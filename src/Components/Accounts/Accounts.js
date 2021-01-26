import React from 'react';
import Account from './Account/Account';

const Accounts = ({showAccounts, getDetails, getId}) => {

    const allAccounts = showAccounts.map((account) => {
        return <Account account = {account} key={account.id} getDetails = {getDetails} getId = {getId} />
    });
    return (
        <div className="row view" id="accounts">
            <div className="col-10 offset-1">
                <h2 className="display-4 m-4">Accounts</h2>
                <div className="row">
                    <div className="col-8 offset-2">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#ID</th>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="account-body">
                                {allAccounts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accounts;
