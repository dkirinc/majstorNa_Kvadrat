"use client"
import React from 'react'
import { AppWrapper } from '../../context'
import AdminPanel from '../../components/AdminPanel'

export default function Panel() {

    return (
        <div>
            <AppWrapper>
                <AdminPanel />
                {/* <Modal open={open} setOpen={setOpen} pic_1={fileBefore} pic_2={fileAfter} /> */}
            </AppWrapper >
        </div>
    )
}
