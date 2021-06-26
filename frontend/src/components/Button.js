const Button = ({ text, onClick, className }) => {
    const customClass = `btn btn-primary ${className}`
    return (
        <button className={customClass} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;