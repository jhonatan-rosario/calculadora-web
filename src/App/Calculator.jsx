import React, { Component } from "react";
import { Display, Button } from "../components";
import '../style/Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

export default class Calculator extends Component {
    
    state = { ...initialState };

    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    };

    clearMemory() {
        this.setState({ ...initialState });
    };

    setOperation(operation) {
        const equals = operation === '=';

        if (this.state.current === 0) {
            this.setState({
                operation: equals ? null : operation,
                current: equals ? 0 : 1, 
                clearDisplay: equals ? false : true
            });
        } else {
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
           
            function calculate(value1, value2, operation) {
                let result
                switch (operation) {
                    case '+':
                        result = value1 + value2;
                        break;
                    case '-':
                        result = value1 - value2;
                        break;
                    case '*':
                        result = value1 * value2;
                        break;
                    case '/':
                        result = value1 / value2;
                        break;
                    default:
                        alert('Operação inválida!')
                        break;
                };
                return result
            };
            
            if (values[1] && !equals) {
                this.setState({
                    displayValue: values[0],
                    operation,
                    current: 1,
                    clearDisplay: !equals,
                    values
                });
                return
            }
            
            values[0] = calculate(values[0], values[1], currentOperation); 

            values[1] = equals ? values[1] : 0
            
            console.log(values);
            this.setState({
                displayValue: values[0],
                operation: currentOperation,
                current: 1,
                clearDisplay: !equals,
                values
            });
            
        };
    };

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) return;

        const clearDisplay = (this.state.displayValue === '0' || this.state.clearDisplay)
            && (n !== '.');
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
            console.log(values);
        };
    };
    
    render() {
        return (
            <div>
                <h1 className="title" >Calculator</h1>
                <div className="calculator" >
                    <Display value={this.state.displayValue} />
                    <Button value="ac" label="AC" click={this.clearMemory} triple />
                    <Button value="/" label={String.fromCharCode(247)} click={this.setOperation} operation />
                    <Button value="7" label="7" click={this.addDigit} />
                    <Button value="8" label="8" click={this.addDigit} />
                    <Button value="9" label="9" click={this.addDigit} />
                    <Button value="*" label={String.fromCharCode(215)} click={this.setOperation} operation />
                    <Button value="4" label="4" click={this.addDigit} />
                    <Button value="5" label="5" click={this.addDigit} />
                    <Button value="6" label="6" click={this.addDigit} />
                    <Button value="-" label="-" click={this.setOperation} operation />
                    <Button value="1" label="1" click={this.addDigit} />
                    <Button value="2" label="2" click={this.addDigit} />
                    <Button value="3" label="3" click={this.addDigit} />
                    <Button value="+" label="+" click={this.setOperation} operation />
                    <Button value="0" label="0" click={this.addDigit} double />
                    <Button value="." label="." click={this.addDigit} />
                    <Button value="=" label="=" click={this.setOperation} operation />
                </div>
            </div>
        );
    };
};