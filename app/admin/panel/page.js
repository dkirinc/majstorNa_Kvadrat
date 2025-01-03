
import React from 'react'
import { AppWrapper } from '../../context'
import AdminPanel from '../../components/AdminPanel'
import Modal from '../../components/Modal'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export default async function Panel() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/admin')
    }

    return (
        <div>
            <AppWrapper>
                <AdminPanel />
                <Modal />
            </AppWrapper >
        </div>
    )
}
