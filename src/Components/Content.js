import React from "react";

export class Content extends React.Component{
    render() {
        return (
          <div id = {"Content"}>
              {this.props.children}
          </div>
        );
    }
}