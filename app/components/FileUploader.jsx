import React from 'react'
import { useRef } from 'react';

const FileUploader = ({ handleFile, handleFileDB, btnText }) => {

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);


    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        const fileDB = event.target.files[0]
        const fileUploaded = URL.createObjectURL(event.target.files[0]);
        handleFile(fileUploaded);
        handleFileDB(fileDB)
    };

    return (
        <>
            <button className="bg-orange-main p-2 rounded-md w-36 text-white" onClick={handleClick}>
                {btnText}
            </button>
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: 'none' }} // Make the file input element invisible
            />
        </>
    )
}

export default FileUploader