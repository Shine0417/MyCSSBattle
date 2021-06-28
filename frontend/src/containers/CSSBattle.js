import { useState, useEffect } from "react";
import GameBody from "./GameBody";
import Header from "../components/Header"
import Footer from "../components/Footer";
import useImage from "../hook/useImage";
import SignIn from "../components/SignIn";
const CSSBattle = () => {
    const { images, curScore, getImage, submitCode } = useImage();
    const [code, setCode] = useState("<div></div>\n<style>\ndiv{\n width: 150px;\n height:150px;\n background-color: grey;\n}\n</style>");
    const [curImg, setCurImg] = useState(0);
    const [logIn, setLogin] = useState(null);
    useEffect(() => {
        if (images[curImg])
            getImage(images[curImg].name);
    }, [curImg]);
    const onSubmit = () => {
        submitCode(images[curImg].name, code, logIn);
    }
    useEffect(() =>{
        if (images[curImg])
            getImage(images[curImg].name);
    }, [logIn])
    return (
        <>
            <h1 className="text-center m-4" id="logo">CSS Battle</h1>
            <div className="container" id="gameBody">
                {logIn ? <>
                    <Header images={images} curImg={curImg} setCurImg={setCurImg} />
                    <GameBody src={(images[curImg] ? images[curImg].url : "")} code={code} setCode={setCode} />
                    <Footer score={curScore} percentage={(curScore + code.length) / 10} onSubmit={onSubmit} /></> :
                    <SignIn setLogin={setLogin} />
                }
            </div>
        </>
    )
}

export default CSSBattle;