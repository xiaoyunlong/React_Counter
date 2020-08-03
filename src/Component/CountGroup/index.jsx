import React from 'react';
import Counter from '../Count';

class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 }
    }

    handleResize = (event) => {       
            this.setState({            
                size: event.target.value ? parseInt(event.target.value) : 0,              
            })   
    }

    handleChange = (value) =>{
        this.setState((prevState) => {
            return ({
                totalValue: prevState.totalValue - value
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
                //initArrays.map(key => <Counter groupSize={this.state.size} handleIncrease={this.handleIncrease} handleDncrease={this.handleDncrease} key={key}/>)
                initArrays.map(key => <Counter handleChange={this.handleChange} key={key}/>)
            
            }
        </div>

    }

}

export default CountGroup;