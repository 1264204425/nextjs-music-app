import React from "react";
import { Button } from "@nextui-org/react";


interface VideoPlayerButtonProps {
    onClick: () => void;
}

const VideoPlayerButton: React.FC<VideoPlayerButtonProps> = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            radius="full"
            variant="light"
            className="z-10 fixed bottom-5 right-1 flex bg transparent-button"
            isIconOnly
        >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#333" stroke="#333" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M24 12C17.3726 12 12 17.3726 12 24" stroke="#FFF" strokeWidth="3" strokeLinecap="square"
                      strokeLinejoin="round"/>
                <path d="M24 36C30.6274 36 36 30.6274 36 24" stroke="#FFF" strokeWidth="3" strokeLinecap="square"
                      strokeLinejoin="round"/>
                <path
                    d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                    fill="#FFF" stroke="#FFF" strokeWidth="3" strokeLinejoin="round"/>
            </svg>
        </Button>
    );
};

export default VideoPlayerButton;
