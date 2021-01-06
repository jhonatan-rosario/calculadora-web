import React, {
    Component
} from "react";
import {
    Display,
    Button
} from "../components";
import '../style/Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operator: null,
    lastOperation: null,
    // value1 - value2 - result
    values: [null, null],
    changedValue2: false,
    // current index of values
    current: 0
};

export default class Calculator extends Component {

    state = {
        ...initialState
    };

    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    };

    clearMemory() {
        this.setState({
            ...initialState
        });
    };

    setOperation(operator) {
        const equals = operator === '=';
        if (this.state.values[0] === null) return;
        if (this.state.current === 0) {
            this.setState({
                operator: equals ? null : operator,
                current: equals ? 0 : 1,
                clearDisplay: !equals
            });
        } else {

            const currentOperator = this.state.operator 
            
            const values = [...this.state.values];

            if (values[1]) {
                
                if (!!equals) {
                    console.log('igual')
                    values[0] = this.calculate(values[0], values[1], currentOperator || this.state.lastOperation);
                    
                    this.setState({
                        displayValue: values[0],
                        lastOperation: currentOperator || this.state.lastOperation,
                        operator: null,
                        changedValue2: false,
                        current: 1,
                        clearDisplay: true,
                        values
                    });
                    return;
                };
                
                if (!equals && currentOperator && this.state.changedValue2) {
                    values[0] = this.calculate(values[0], values[1], currentOperator);
                    console.log('entrou');
                    values[1] = null;
                    this.setState({
                        displayValue: values[0],
                        //operator: null,
                        lastOperation: currentOperator,
                        current: 1,
                        changedValue2: false,
                        clearDisplay: true,
                        values
                    });
                    return;
                };
            };
            
            //values[1] = null
            this.setState({
                //displayValue: values[0],
                operator: equals ? null : operator,
                current: 1,
                clearDisplay: true,
                values
            });
        };
    };

    addDigit(n) {
        if (this.state.displayValue.length >= 10) return
        
        if (n === '.' && this.state.displayValue.includes('.')) return;

        const clearDisplay = (this.state.displayValue === '0' || this.state.clearDisplay) && (n !== '.');
        const currentValue = clearDisplay ? '': this.state.displayValue;
        const displayValue = currentValue + n;
        
        this.setState({
            displayValue, 
            clearDisplay: false
        });

            if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            const changedValue2 = this.state.current === 1 
                && newValue !== "";
            this.setState({
                values,
                changedValue2
            });
            console.log(values);
        };
    };

    calculate(value1, value2, operator) {
        //window.alert(operator)
        let result
        switch (operator) {
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

    render() {
        return (
            <div>
                <h1 className="title">Calculator</h1>
                <div className="calculator">
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