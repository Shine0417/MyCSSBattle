import Button from "./Button"
const SignIn = ({ setLogin }) => {
    const login = () => {
        if (document.getElementById("name"))
            setLogin(document.getElementById("name").value)
    }
    return (
        <>
            <div className="container" id="signinContainer">
                <div className="row">
                    <h1 className="HeaderText" id="challenge">Challenge</h1>
                    <h3 className="HeaderText">Yourself</h3>
                </div>
                <div className="row" id="signin">
                    <div className="col-auto">
                        <label>Enter Your Name</label>
                        <input className="form-control my-2" placeholder="Name" id="name"></input>
                        <Button text="StartGame" className="btn btn-primary mt-3 float-end" onClick={login}></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;