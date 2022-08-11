import {Component} from "react";
import PropTypes from "prop-types";

import styles from "./toggle-button.module.scss";

class ToggleButton extends Component {

    /*
    constructor(){
        this.state = {
            isActive: false
        };
        
        this.handleClick = () => {
            // console.log(this);
            const prevState = this.state.isActive;
            this.setState({
                isActive: !prevState
            })
        }
    }
    */

    state = {
        isActive: false
    }

    handleClick = () => {
        this.setState(prevState => {
            const {isActive} = prevState;
            return {
                isActive: !isActive
            }
        })
    }
    
    render(){
        const {text} = this.props;
        const {isActive} = this.state;

        const className = isActive ? styles.btnActive : styles.btn;

        return (
            <button onClick={this.handleClick} className={className}>{text}</button>
        )
    }
}

export default ToggleButton;

ToggleButton.propTypes = {
    text: PropTypes.string.isRequired
}