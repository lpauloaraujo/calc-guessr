import {Button} from './utils.jsx';

export default function DifficultyBar({ setDifficulty }) { 
    return (
        <div>
            <Button width="100px" height="80px" color="green" size="20px" onClick={() => setDifficulty('easy')}>Easy</Button>
            <Button width="100px" height="80px" color="orange" size="20px" onClick={() => setDifficulty('medium')}>Medium</Button>
            <Button width="100px" height="80px" color="red" size="20px" onClick={() => setDifficulty('hard')}>Hard</Button>
        </div>
    );
}