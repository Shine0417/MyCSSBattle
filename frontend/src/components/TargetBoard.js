import { ColorExtractor } from 'react-color-extractor'
import { useState } from 'react'
import { TwitterPicker } from 'react-color';

const TargetBoard = ({ src }) => {
    const [usedColor, setUsedColor] = useState();
    const [pop, setPop] = useState(false);
    const [color, setColor] = useState("");
    const popup = (pop === true) ? <TwitterPicker colors={usedColor} color={color} className="popup" onChange={(c, e) => setColor(c.hex)}></TwitterPicker> : <></>

    const img = (src === "" || !src) ? "" : <ColorExtractor getColors={(c) => setUsedColor(c)} >
        <img src={src} alt="Select a Level" onClick={() => setPop(!pop)} />
    </ColorExtractor>

    return (
        <div>
            <div className="board_top">
                This is the Target
            </div>
            <div className="board">
                {img}
            </div>
            <div className="board_bottom">
                Click on Image to Show Color
                {popup}
            </div>
        </div>
    )
}

export default TargetBoard;