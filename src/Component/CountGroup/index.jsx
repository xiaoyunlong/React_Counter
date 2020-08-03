import React from 'react';
import Counter from '../Count';

class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 }
    }

    handleResize = (event) => {
        const newSize = event.target.value ? parseInt(event.target.value) : 0 ;
        if(newSize != this.state.size){
            this.setState({
            
                size: event.target.value ? parseInt(event.target.value) : 0,
                totalValue : 0
            })
        }
       
    }

    handleIncrease = () => {
        this.setState((preState) => ({
            totalValue: preState.totalValue + 1
        }))
    }

    handleDncrease = () => {
        this.setState((prevState) => {
            return ({
                totalValue: prevState.totalValue - 1
            });
        })
    }

    render() {
        const initArrays = [...Array(this.state.size).keys()];
        return <div>
            <label>
                Group size:
                <input onBlur={this.handleResize} defaultValue={0}></input>
            </label>
            <br />
            <div>
                <label>
                    Total Number: {this.state.totalValue}
                </label>
            </div>
            {
                initArrays.map(key => <Counter groupSize={this.state.size} handleIncrease={this.handleIncrease} handleDncrease={this.handleDncrease} key={key}/>)
            }
        </div>

    }

}

export default CountGroup;