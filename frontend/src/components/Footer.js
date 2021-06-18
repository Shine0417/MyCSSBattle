import Button from "./Button";

const Footer = ({ text }) => {
    return (
        <div className="">
            <div className="progress">
                <div>Similarity</div>
                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <div>
                <Button text="Import Template" />
            </div>
        </div>)
}

export default Footer;