import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

function CustomButton({ title, type, customStyles, handleClick }) {
    const snap = useSnapshot(state);

    function generateStyle(type) {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }
    return (
        <button className={`px-2 py-1.5 flex-1 roded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}

        </button >
    );
};

export default CustomButton;