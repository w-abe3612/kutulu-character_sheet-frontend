import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import SkillCheck from './Character/AbilityValue'
import { handleInitialData } from '../actions/shared'
import Header from './Header'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'




class App extends React.Component<{dispatch: any},{}>  {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div className='l-layout' >
                <div className='l-inner'>
                    <Header />
                    <div className='l-wrap'>

                        <SkillCheck />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
  }

export default connect(mapStateToProps)(App)