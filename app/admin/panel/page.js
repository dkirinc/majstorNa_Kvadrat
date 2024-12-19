"use client"
import React from 'react'
import { AppWrapper } from '../../context'
import AdminPanel from '../../components/AdminPanel'
import Modal from '../../components/Modal'

export default function Panel() {

    return (
        <div>
            <AppWrapper>
                <AdminPanel />
                <Modal />
            </AppWrapper >
        </div>
    )
}
