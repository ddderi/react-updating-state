// Code ClickityClick Component Here

import React from 'react'

export default class ClickityClick extends React.Component{

    constructor(){
        super()
        this.state = {
            clicked: 'jai pas ete cliquer'
        }
    }

    changestate = () => {
        this.setState({
            clicked: 'jai  ete cliquer'
          })
    }

    toggleBtnClick = () => {
        if(this.state.clicked === 'jai pas ete cliquer' ){
            this.changestate()
        }else{
            this.setState({
                clicked: 'jai pas ete cliquer'
              }) 
        }
    }


render(){
    return (
        <div>
        <p>this is my first state {this.state.clicked}</p>
    <button onClick={this.toggleBtnClick}>click</button>
    </div>
    )
}

}