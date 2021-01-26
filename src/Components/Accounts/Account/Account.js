import React from 'react';
import { useHistory } from 'react-router-dom';

const Account = ({account,getDetails, getId}) => {
    let history = useHistory();
    const passData = (id) => {
        getDetails(account.id);
        redirect();
    }
    const removeAcc = (id) => {
        console.log(getId);
    }
    const redirect = () => {
        history.push("/edit");
    }
    
    return (
        <tr>
            <td>{Number(account.id)}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.email}</td>
            <td>{account.phone}</td>
            <td><button className="btn btn-warning" onClick={passData}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={removeAcc}>Delete</button></td>
        </tr>
    );
}

export default Account;
