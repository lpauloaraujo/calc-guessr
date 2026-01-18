import {Card} from './utils.jsx';

export default function Score({ score }) {
    return (
        <Card className="score-card">
            <h2 style={{ color: 'black' }}>Your Score: {score}</h2>
        </Card>
    );
}