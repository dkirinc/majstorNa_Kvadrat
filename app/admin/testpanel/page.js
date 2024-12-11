"use client"
import React from 'react'
import { useState, useRef } from 'react';
import FileUploader from '@/app/components/FileUploader';

export default function Testpanel() {

    const [file, setFile] = useState()

    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <FileUploader handleFile={setFile} />
            {file ? <p>${file}</p> : null}
            <img src={file} />
        </div>
    )



}

