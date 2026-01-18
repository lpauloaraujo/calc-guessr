import { Card } from "./utils";
import { Button } from "./utils";

export default function AnswerOptions() {
    return (
        <Card id="answer-options-card" className="answer-options-card">
            <h3>The answer is...</h3>
            <Button color="white" backgroundColor="#388659" size="18px">Correct</Button>
            <Button color="white" backgroundColor="#A4031F" size="18px">Incorrect</Button>
        </Card>
    )
}