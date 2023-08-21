import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const handleBudgetChange = (b)=>{
        dispatch({
            type: "SET_BUDGET",
            payload: b
        });
    };
    return (
        <div className="alert alert-secondary row">
            <label className="col-sm-3">Budget:</label>
            <div className="col-sm-9">
                {currency}
                <input 
                    type="number"
                    value={budget}
                    style={{width: "90%"}}
                    step={10}
                    max={20001}
                    onChange={(event)=>handleBudgetChange(event.target.value)}
                />
            </div>
        </div>
    );
};
export default Budget