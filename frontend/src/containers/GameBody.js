import { useState } from 'react';
import TextEditor from '../components/TextEditor';
import WhiteBoard from '../components/WhiteBoard';
import TargetBoard from '../components/TargetBoard';
const GameBody = () => {
    const [code, setCode] = useState("<div></div>\n<style>\ndiv{\n width: 150px;\n height:150px;\n background-color: grey;\n}\n</style>");
    return (
        <div className="row">
            <div className="col-4">
                <TextEditor code={code} setCode={setCode} />
            </div>
            <div className="col-4">
                <WhiteBoard code={code} />
            </div>
            <div className="col-4">
                <TargetBoard />
            </div>
        </div>
    )
}
export default GameBody;