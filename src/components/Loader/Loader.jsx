import React from "react";
import { ThreeDots } from 'react-loader-spinner';

class Loader extends React.Component {
    render() {
        return (
            <ThreeDots color="rgb(123, 104, 238)"/>
        );
    }
}

export default Loader;