import VideoPlayer from "./utils/videoPlayer.jsx";

export default function Film({filmUrl, onClose}) {
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black  flex p-7 justify-center">
            <VideoPlayer src={filmUrl} onClose={onClose} />
        </div>
    )
}

