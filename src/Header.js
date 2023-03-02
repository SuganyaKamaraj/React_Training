import React from "react";
//Statefull class component - Container - n number of child/children (one fam)
// default - container; extends

export default class Header extends React.Component {
    //const, props(get,set), fun/,ethods
    constructor(props) //initialize state and props
    {
        super(props)
        this.state = { username: 'Suganya' }//state Tree

    }
    render()
    {
        return(
            <div> 
                <h1> Header Data ::: {this.props.company} -- City is ::: {this.props.city} </h1>
                <h3 className="text-center"> by {this.state.username} </h3>
            </div>
        )

    }


}


