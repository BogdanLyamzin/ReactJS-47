import { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        isError: false,
    }

    static getDerivedStateFromError(error) {
        // console.log(error.message);
        return {isError: true}
    }

    componentDidCatch(error, errorInfo){
        // console.log(error);
        // console.log(errorInfo);
        const {componentStack} = errorInfo;
        const errorLog = JSON.parse(localStorage.getItem("errorLog"));
        const newErrorLog = errorLog ? [...errorLog, componentStack] : [componentStack];
        localStorage.setItem("errorLog", JSON.stringify(newErrorLog))
    }

    render() {
        const {children, message} = this.props;
        const {isError} = this.state;

        if(isError) {
            return message
        }

        return children;
    }
}

export default ErrorBoundary;