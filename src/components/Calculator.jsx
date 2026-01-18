import {Button} from './utils.jsx'; 

function CalculatorButton({label}) {
    return (
        <div style={{color: "black", backgroundColor: '#f0f0f0', padding: '10px', margin: '5px', borderRadius: '5px', borderColor: "black"}}>{label}</div>
    )
}

function CalculatorButtonLine({labels}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {labels.map((label, index) => (
                <CalculatorButton key={index} label={label} />
            ))}
        </div>
    )
}

function CalculatorDisplay({expression}) {
    return (
        <div style={{color: 'black',backgroundColor: 'white', padding: '20px', margin: '10px', borderRadius: '5px', borderColor: "black", minHeight: '50px', textAlign: 'right', fontSize: '24px'}}>{expression}</div>
    )
}

function CalculatorGrid() {
    const labels = [
        'C', '()', '%', '/',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '+/-', '0', ',', '='
    ];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px'
            }}
        >
            {labels.map((label, index) => (
                <CalculatorButton key={index} label={label} />
            ))}
        </div>
    );
}


export default function Calculator() {
    return (
        <div className="calculator-container">
            <CalculatorDisplay expression={"5 * 2 = 10"} />
            <CalculatorGrid />
        </div>
    )
}