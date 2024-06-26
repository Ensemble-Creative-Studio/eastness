export default function SoundButton() {
    return (
        <div className="z-20 fixed bottom-5 right-5 w-10 h-10 mute-unmute-button unmute-button-style-3 cursor-pointer p-2">
            <svg 
                className="volume-off" 
                version="1.1" xmlns="http://www.w3.org/2000/svg" 
                x="0px" y="0px" 
                viewBox="-502 376 18 18" 
            >
                <g id="Layer_2">
                    <g id="Layer_1-2">
                        <g id="Volume_Off">
                            <path className="fill-white" d="M-502,382v6h4l5,5v-16l-5,5H-502z"></path>
                            <path className="fill-none stroke-white stroke-2" d="M-484.7,381.7l-6.6,6.6 M-491.3,381.7l6.6,6.6"></path>
                        </g>
                    </g>
                </g>
            </svg>
            
            <svg 
                className="volume-on hidden" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" y="0px" 
                viewBox="-502 376.2 18 18" 
            >
                <g id="Layer_2">
                    <g id="Layer_1-2">
                        <g id="Volume_On">
                            <path className="fill-white" d="M-502,382.2v6h4l5,5v-16l-5,5H-502z M-488.5,385.2c0-1.7-1-3.2-2.5-4v8
                                C-489.5,388.5-488.5,386.9-488.5,385.2z M-491,376.5v2.1c3.7,1.1,5.8,5,4.7,8.7c-0.7,2.3-2.4,4-4.7,4.7v2.1
                                c4.8-1.1,7.9-5.9,6.7-10.8C-485,379.9-487.6,377.2-491,376.5z">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}