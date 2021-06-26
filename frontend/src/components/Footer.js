import Button from "./Button";
import {ProgressBar} from 'react-bootstrap'
const Footer = ({ score, percentage, onSubmit }) => {
    const currentScore = `CurrentScore: ${score}`
    return (
        <div className="d-flex justify-content-center" id="footer_container">
            <div className="text-center">
                <Button onClick={onSubmit} text="Check Similarity"></Button>
            </div>
            <div className="progress_bar m-2">
                <ProgressBar now={percentage} label={`${percentage}%`} />
            </div>
            <div className="text-center mx-4">
                <button className="btn btn-secondary" disabled={true}>{currentScore}</button>
            </div>
        </div>)
}

export default Footer;