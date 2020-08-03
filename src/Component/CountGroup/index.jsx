import React from 'react';
import Counter from '../Count';

class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 }
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    render() {
        const initArrays = [...Array(this.state.size).keys()];
        return <div>
            <label>
                Group size:
                <input onBlur={this.handleResize} defaultValue={0}></input>
            </label>
            {
                initArrays.map(key => <Counter key={key}></Counter>)
            }
        </div>

    }

}

export default CountGroup;