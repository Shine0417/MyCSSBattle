import Button from "./Button";

const Header = ({ text }) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="headerItem">
                <h1 id="logo">CSS Battle</h1>
            </div>
            <div className="headerItem">
                <h1 className="text-center m-4">{text}</h1>
            </div>
            <div className="headerItem">
                <Button text="Choose Battle"/>
            </div>
        </div>)
}

export default Header;