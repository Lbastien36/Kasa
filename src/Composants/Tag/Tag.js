import React from 'react';



const Tag = ({ tags }) => {
    return (
        <div className='tags'>
            {tags.map((tag, Tags) => (
                <p key={Tags} className='tag'>{tag}</p>
            ))}
        </div>
    );
};

export default Tag;