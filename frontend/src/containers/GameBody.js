import { useState, useEffect } from 'react';
import TextEditor from '../components/TextEditor';
import WhiteBoard from '../components/WhiteBoard';
import TargetBoard from '../components/TargetBoard';
const GameBody = ({src, code, setCode}) => {
    return (
        <div className="row">
            <div className="col-4">
                <TextEditor code={code} setCode={setCode} />
            </div>
            <div className="col-4">
                <WhiteBoard code={code} src={src}/>
            </div>
            <div className="col-4">
                <TargetBoard src={src}/>
            </div>
        </div>
    )
}
export default GameBody;