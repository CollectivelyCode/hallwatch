import React from 'react';
import { Row, Col, Card, Button, Spacer, Grid, Fieldset } from '@geist-ui/react'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import {NextPageContext} from "next";





function Pass() {
    return (
        <>

            </>
    )
}

export async function getServerSideProps(context: NextPageContext) {

    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}
export default Pass
