import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="animate__animated animate__bounce animate">
            <img
                alt={title}
                src={url}
            />
            <p>{title}</p>
        </div>
    )
}
