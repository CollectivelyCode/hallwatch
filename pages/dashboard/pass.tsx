import React from 'react';
import { GetServerSideProps } from 'next'
import { Row, Col, Card, Button, Spacer, Grid, Fieldset } from '@geist-ui/react'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'





function Dashboard() {
    return
    (
        <Fieldset>
            <Fieldset.Title>The Evil Rabbit Jumped over the Fence</Fieldset.Title>
            <Fieldset.Subtitle>The Evil Rabbit Jumped over the Fence</Fieldset.Subtitle>
            <Fieldset.Footer>
                <Fieldset.Footer.Status>
                    <p>An error has occurred.</p>
                </Fieldset.Footer.Status>
                <Fieldset.Footer.Actions>
                    <Button auto size="mini" type="success">Start</Button>
                </Fieldset.Footer.Actions>
            </Fieldset.Footer>
        </Fieldset>
    )
}

export async function getServerSideProps(context) {

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