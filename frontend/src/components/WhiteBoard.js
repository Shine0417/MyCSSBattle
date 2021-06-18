import { useEffect, useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ReactShadowRoot from 'react-shadow-root';
import * as htmlToImage from 'html-to-image';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

import targetImg from '../Kid.png'
const WhiteBoard = ({ code }) => {
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
                    setImage(dataUrl)
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
    }, [code])
    return (
        <div className="board">
            <div id="whiteBoard">
                <ReactShadowRoot>
                    <div>{dom}</div>
                </ReactShadowRoot>
            </div>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="" srcSet={image} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="" srcSet={targetImg} alt="Image two" />}
                handle={<ReactCompareSliderHandle buttonStyle={{display: 'none'}} linesStyle={{height: '100%', width: 4, backgroundColor: '#0db0f091'}}/>}
                position="100"
                id="coverImage"
            />
            {/* <div id="coverImage">{image}</div> */}
        </div>
    )
}

export default WhiteBoard;