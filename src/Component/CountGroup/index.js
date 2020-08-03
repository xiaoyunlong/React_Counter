import React from 'react';
import Counter from '../Count';

class CountGroup extends React.Component{
    constructor(props){
        super(props);
        this.size = 6;
    }
    render(){
        const initArrays = [...Array(this.size).keys()];
        return <div>
            {
                initArrays.map(key => <Counter key = {key}></Counter>)
            }
        </div>

    }

}

export default CountGroup;