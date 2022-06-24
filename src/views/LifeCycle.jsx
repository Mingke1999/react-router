import React, { Component } from 'react'

const MyAPI ={
    count:0,
    subScribe(cb){
        this.intervalID = setInterval(()=>{
            this.count+=1
            cb(this.count)
        },1000)
    },
    cancel(){
        clearInterval(this.intervalID)
        this.reset()
    },
    reset(){
        this.count = 0;
    }
}

export default class LifeCycle extends Component {

    constructor(){
        super();
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        MyAPI.subScribe(currentCount =>{
            this.setState({
                count:currentCount
            })
        })
    }

    /**
     * Refresh too quick, which induced ->>
     * possible problem-> component has been destructed
     * but the time counter is still running
     */

    componentWillUnmount(){
        //cancle time counter before component desctruct 
        MyAPI.cancel();
    }
  render() {
    console.log(this.state.count)
    return (
      <div>
        <h2>Life Cycle</h2>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
