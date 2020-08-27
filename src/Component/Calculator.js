import React, { Component } from "react";

class Calculator extends Component
{
    state =
    {
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        result: ""
    }

    setNum = (e, num) => 
    {
        this.setState({[num]: e.target.value});
    }

    addition = (e) =>
    {
        e.preventDefault();
        let theSum = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState(
        {
            result: theSum
        });
    }

    difference = (e) =>
    {
        e.preventDefault();
        let theDiff = parseInt(this.state.num3) - parseInt(this.state.num4);
        this.setState(
        {
            result: theDiff
        });
    }
    
    multiply = (e) =>
    {
        e.preventDefault();
        let theProd = parseInt(this.state.num5) * parseInt(this.state.num6);
        this.setState(
        {
            result: theProd
        });
    }
    
    div = (e) =>
    {
        e.preventDefault();
        let theDiv = parseInt(this.state.num7) / parseInt(this.state.num8);
        this.setState(
        {
            result: theDiv
        });
    }

    render()
    {
        return(
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => this.setNum(e, 'num1') } />
                    <span>+</span>
                    <input type="number" name="num2" placeholder="Enter your second number" value={this.state.num2} onChange={ (e) => this.setNum(e, 'num2') } />
                    <button onClick={(e) => this.addition(e)}>=</button>
                </div>
                <div className="subtract">
                    <input type="number" name="num3" placeholder="Enter your first number" value={this.state.num3} onChange={ (e) => this.setNum(e, 'num3') } />
                    <span>-</span>
                    <input type="number" name="num4" placeholder="Enter your second number" value={this.state.num4} onChange={ (e) => this.setNum(e, 'num4') } />
                    <button onClick={(e) => this.difference(e)}>=</button>
                </div>
                <div className="multiply">
                    <input type="number" name="num5" placeholder="Enter your first number" value={this.state.num5} onChange={ (e) => this.setNum(e, 'num5') } />
                    <span>*</span>
                    <input type="number" name="num6" placeholder="Enter your second number" value={this.state.num6} onChange={ (e) => this.setNum(e, 'num6') } />
                    <button onClick={(e) => this.multiply(e)}>=</button>
                </div>
                <div className="divide">
                    <input type="number" name="num7" placeholder="Enter your first number" value={this.state.num7} onChange={ (e) => this.setNum(e, 'num7') } />
                    <span>/</span>
                    <input type="number" name="num8" placeholder="Enter your second number" value={this.state.num8} onChange={ (e) => this.setNum(e, 'num8') } />
                    <button onClick={(e) => this.div(e)}>=</button>
                </div>
                
                <h3>{this.state.result}</h3>
                
            </div>
        )
    }
}

export default Calculator;