import axios from "axios";
import React, {Component} from "react";

export default class Home extends Component{

    render(){
        if(this.props.user){
            return(
                <>Welcome {this.props.user.first_name}</>
            )
        }
        return (
            <>Home</>
        )
    }
}