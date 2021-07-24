import React, { Component } from 'react';
import Keypad from './keypad'
import Output from './output'
import './app.css'

class App extends Component {

    state={result:''}
    

    buttonPressed=(buttonName)=>{

        if(buttonName==="="){
         this.calculate();
        }
        else if(buttonName==="C"){
            this.reset()
        }
        else
        {
            this.setState({result:this.state.result + buttonName})
        }
        
        
        
    }

    reset=()=>{
        this.setState({result:""})
    }

    calculate=()=>{
        try{
            
            this.setState({result:(eval(this.state.result) ||"") + ""

            })
        }
        catch(e){
            this.setState({result:"error"})

        }
    }

    render() {
        return (
            <div className="app">
                <div className="Calc-body">
                <Output result={this.state.result} />
                <Keypad buttonPressed={this.buttonPressed}/>
                </div>
               
            </div>
        );
    }
}

export default App;