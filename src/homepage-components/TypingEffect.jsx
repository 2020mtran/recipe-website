import React, { useState, useEffect } from "react";

const TypingEffect = ({ words, speed = 50, eraseSpeed = 50, delay = 8000 }) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true); // Controls blinking cursor

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, eraseSpeed);
        } else {
            timeout = setTimeout(() => {
                setText((prev) => currentWord.slice(0, prev.length + 1));
            }, speed);
        }

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed, eraseSpeed, delay]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500); // Toggle cursor visibility every 500ms

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="relative inline-block text-chilired">
            {text}
            <span 
                className={`absolute w-[1px] h-full bg-chilired ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                style={{ right: -2 }}
            >
            </span>
        </span>
    );
};

export default TypingEffect;
