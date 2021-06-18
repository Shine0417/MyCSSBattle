const BackgroundVideo = ({src}) => {
    return (
        <span>
    <video className='videoTag' autoPlay loop muted
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
        }}>
        <source src={src} type='video/mp4' />
    </video>
        </span>)
}

export default BackgroundVideo;