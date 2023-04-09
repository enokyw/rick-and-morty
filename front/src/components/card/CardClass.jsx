import React from "react";
import { connect } from "react-redux";


export class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>this is class component
            nada es dificil
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, null)(Cards);