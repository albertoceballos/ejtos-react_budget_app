import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = (props) =>{
    const [showDropdown, setDropdown] = useState(false);
    const {currency, dispatch} = useContext(AppContext);
    let currencyName = {
        "$": "Dollar",
        "£": "Pound",
        "€": "Euro",
        "₹": "Ruppee"
    }
    const handleChangeCurrency = (cur)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: cur
        });
        setDropdown(false);
    }
    return (
        <div className="dropdown">
            <button 
                className="btn btn-success dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={()=>{setDropdown(!showDropdown)}}
            >
                Currency ({currency} {currencyName[currency]})
            </button>
            <div className="dropdown-menu" style={{display: (showDropdown ? "block" : "none"), backgroundColor: "lightgreen"}} aria-labelledby="dropdownMenuButton">
                {Object.keys(currencyName).map((c)=>(
                    <button key={c} className="dropdown-item" onClick={()=>handleChangeCurrency(c)}>{c} {currencyName[c]}</button>
                ))}
            </div>
        </div>
    );
};

export default Currency;