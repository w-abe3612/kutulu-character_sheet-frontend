import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CheckButton: React.FC = ( props ) => {
    return (
        <li key="1" className="m-check_list__li" >
            <div>
                <label
                    className="m-check_label"
                    htmlFor="test2"
                    data-num="1"
                ></label>
                <input
                    type="checkbox"
                    className="m-check_input"
                    id=""
                    name="test_"/>
            </div>
        </li>
    )
}

export default CheckButton;