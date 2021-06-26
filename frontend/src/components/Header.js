// import Button from "./Button";
import Dropdown from 'react-bootstrap/Dropdown'
const Header = ({ images, curImg, setCurImg }) => {

    const best = images.length > 0 ? `Top Player: ${images[curImg].bestName}` : ""
    const bestScore = images.length > 0 ? `Score: ${images[curImg].bestScore} points` : ""
    
    return (
        <div className="row position-relative">
            <div className="col-3 " />
            <div className="col-6 my-3">
                <div id="score-container">
                    <h2 className="text-center">{best}</h2>
                    <h3 className="text-center">{bestScore}</h3>
                </div>
            </div>
            <div className="col-3 my-3">
                <Dropdown
                    onSelect={(eventKey) => { setCurImg(eventKey) }}
                    className="text-center m-4"
                >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Level
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {images.length > 0 ?
                            images.map((image, id) => (<Dropdown.Item key={id} eventKey={id} href="#/action-1">{image.name}</Dropdown.Item>)) :
                            <></>}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)
}

export default Header;