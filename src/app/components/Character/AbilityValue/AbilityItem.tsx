import React from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './checkButton' 



class AbilityItem extends React.Component {
    state = {}
    test = () => {
        let t = []
        for (let i:number = 1;  3 >= i ; ++i ) {
            console.log(i)
            t.push( <CheckButton /> )
        }
        return t
    }

    render() {
        return (
            <li className="m-slill-item" >
                <div className="m-slill-item__title" >
                    <label className="m-slill-item__title__text" >名声</label>
                </div>
                <div className="m-slill-item__content" >
                    <ul className="m-check_list" >
                        { this.test() }
                    </ul>
                </div>
            </li>
        )
    }
}

export default AbilityItem