import React from 'react';
import {GetServerSideProps, NextPageContext} from 'next'
import { Row, Col, Card, Button, Spacer, Grid } from '@geist-ui/react'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'





function Dashboard() {
    return <h1>hey</h1>
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
export default Dashboard
