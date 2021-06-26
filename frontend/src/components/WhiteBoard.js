import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactShadowRoot from 'react-shadow-root';
import * as htmlToImage from 'html-to-image';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

const WhiteBoard = ({ code, src }) => {
    const [dom, setDom] = useState(ReactHtmlParser(code));
    const [image, setImage] = useState(null);
    // useEffect(()=>{
    //     setDom(ReactHtmlParser(code))
    // }, [])
    useEffect(() => {
        setDom(ReactHtmlParser(code))
        const node = document.getElementById("whiteBoard");
        if (node)
            htmlToImage.toPng(node)
                .then(function (dataUrl) {
                    // console.log(dataUrl)
                    setImage(dataUrl)
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
    }, [code])
    return (
        <div>
            <div className="board_top">
                This is Your output
            </div>
            <div className="board">
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="" srcSet={image} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="" srcSet={src} alt="Image two" />}
                    handle={<ReactCompareSliderHandle buttonStyle={{ display: 'none' }} linesStyle={{ height: '100%', width: 4, backgroundColor: '#0db0f091' }} />}
                    position="100"
                    id="coverImage"
                />
                <div className="board" id="whiteBoard">
                    <ReactShadowRoot>
                        <div>{dom}</div>
                    </ReactShadowRoot>
                </div>
            </div>
            <div className="board_bottom">
                Drag image to Show Diff
            </div>
        </div>
    )
}

export default WhiteBoard;