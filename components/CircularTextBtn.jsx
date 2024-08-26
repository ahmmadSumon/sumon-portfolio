"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const CircularTextWithButton = ({ duration = 10, buttonText = 'Hire Me' }) => {
    const textRef = useRef(null);
    const text = '- Arif - Frontend Developer';

    useEffect(() => {
        if (textRef.current && text) {
            // Calculate the angle for each character
            const characters = text.split('');
            const anglePerChar = 360 / characters.length;
            const charactersHTML = characters.map((char, i) => {
                // Calculate rotation for each character
                const angle = i * anglePerChar;
                return `
                    <span
                        style="
                            transform: rotate(${angle}deg) translateY(-80px);
                            display: inline-block;
                            position: absolute;
                            transform-origin: center center;
                        "
                    >
                        ${char}
                    </span>
                `;
            }).join('');
            
            if (textRef.current instanceof HTMLElement) {
                textRef.current.innerHTML = charactersHTML;
            }
        }
    }, [text]);

    return (
        <div className="relative w-48 h-48 rounded-full flex justify-center items-center bg-transparent">
            {/* Circular text */}
            <div
                ref={textRef}
                className="absolute w-full h-full flex justify-center items-center animate-spin"
                style={{ animationDuration: `${duration}s` }}
            >
                {/* Circular text spans will be inserted here */}
            </div>
            
            {/* Button placed in the center of the circular text */}
            <button className="absolute bg-accent text-white px-4 py-2 rounded-full focus:outline-none">
                <Link className="text-decoration-none font-bold text-primary" href="mailto:arifahmmadsumon@gmail.com?subject=Regarding Your Website">
                    {buttonText}
                </Link>
            </button>
        </div>
    );
};

export default CircularTextWithButton;
