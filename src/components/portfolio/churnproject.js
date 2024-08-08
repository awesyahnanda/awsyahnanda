import React from 'react';

export default function Churnproject({ innerRef }) {
    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingTop: "40%",
                    paddingBottom: 0,
                    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                    marginTop: "1.6em",
                    marginBottom: "0.9em",
                    overflow: "hidden",
                    borderRadius: 8,
                    willChange: "transform"
                }}
            >
                <iframe
                    loading="fast"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        border: "none",
                        padding: 0,
                        margin: 0
                    }}
                    src="https://www.canva.com/design/DAGL2FOtmnk/0RSiUYcLWK9PAR7L3019Dw/view?embed"
                    allowFullScreen="allowfullscreen"
                    allow="fullscreen"
                ></iframe>
            </div>
        </>

    );
};