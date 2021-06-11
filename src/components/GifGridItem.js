import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="animate__animated animate__zoomIn">
            <img
                alt={title}
                src={url}
            />
            <p>{title}</p>
        </div>
    )
}
