import { Component } from "react";

class Timer extends Component {

    state = {
        time: 0,
        id: 0
    }

    componentWillUnmount(){
        this.stop();
    }

    start = ()=> {
        const id = setInterval(() => {
            this.setState(({time}) => {
                console.log(time)
                return {
                    time: time + 1
                }
            })
        }, 1000);
        this.setState({
            id
        })
    }

    stop = () => {
        const {id} = this.state;
        clearInterval(id);
    }

    reset = () => {
        this.stop();
        this.setState({
            time: 0,
            id: 0
        })
    }

    render(){
        const {time} = this.state;
        const {start, stop, reset} = this;
        return (
            <div>
                <button onClick={start} type="button">Start</button>
                <button onClick={stop} type="button">Stop</button>
                <button onClick={reset} type="button">Reset</button>
                {time > 0 && <p>{time}</p>}
            </div>
        )
    }
}

export default Timer;