import React from "react";

export class Home extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div className="main">
                <p>I'm Home</p>
                <p>nome: {this.props.name}, età: {this.props.age}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                </ul>
            </div>
           
        )
    }
}