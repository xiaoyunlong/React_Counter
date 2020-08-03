
import React from 'react';

class Counter extends React.Component{
   constructor(props){
        super(props);
        this.state = {value : 0};

   }

//    onIcrease(){      
//         this.setState((prevState) => ({
//             value : prevState.value++
//           }));
//    }
   //TypeError: Cannot read property 'setState' of undefined
//因为点击按钮时，到了onIcrease()方法中的this已经不是组件里的this了。
//去构造函数手动绑定 或者用箭头函数

onIcrease = ()=> {      
    this.setState((prevState) =>({
        value : prevState.value + 1
      }));
}

onDcrease = ()=> {      
    this.setState((prevState) =>({
        value : prevState.value - 1
      }));
}



    render(){
        return (<div>
            <button onClick = {this.onDcrease}>-</button>
        <mark>{this.state.value}</mark>
        <button onClick = {this.onIcrease}>+</button>
            </div>)
        
  }


}

export default Counter;