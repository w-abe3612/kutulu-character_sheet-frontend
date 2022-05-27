import React from 'react';
import ReactDOM from 'react-dom';


class AbilityItem extends React.Component {
    state = {}

    render() {
        return (
            <div className="m-slill-item" >
                <div className="m-slill-item__title" >
                    <label className="m-slill-item__title__text" >名声</label>
                </div>
                <div className="m-slill-item__content" >
                    <ul className="m-check_list" >
                        <li className="m-check_list__li" >
                            <div>
                                <label
                                    className="m-check_label"
                                    htmlFor="test"
                                    data-num="1"
                                ></label>
                                <input
                                    type="checkbox"
                                    className="m-check_input"
                                    id="test"
                                    name="test"
                                    checked={false} />
                            </div>
                        </li>
                        <li className="m-check_list__li" >
                            <div>
                                <label
                                    className="m-check_label"
                                    htmlFor="test2"
                                    data-num="2"
                                ></label>
                                <input
                                    type="checkbox"
                                    className="m-check_input"
                                    id="test2"
                                    name="test2"
                                    checked={true} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AbilityItem