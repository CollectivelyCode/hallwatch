import React from 'react';
import { GetServerSideProps } from 'next'
import { Row, Col } from '@geist-ui/react'
import { SignInCard } from '../../ui/modules'
import { signIn, signOut, useSession, getProviders, getSession } from 'next-auth/client'





export default function LoginPage({ providers }) {
    const [session, loading] = useSession()

    return (<>
        {!session && <>
            <Row gap={0.8} justify="center" style={{ marginTop: '250px' }}>
                <Col span={8}>
                    <SignInCard providers={providers} />
                </Col>
            </Row>
        </>}
    </>)
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    const session = await getSession(context)

    if (!session) {
        return {
            props: { providers }
        }
    }

    const url = new URL(process.env.BASE_URL + context.req.url)

    const getRedirectParam: any = () => {
        if (url.searchParams.get('redirect')){
            return process.env.BASE_URL + url.searchParams.get('redirect')
        }
        return process.env.BASE_URL + 'dashboard/'
    }
    console.log(process.env.BASE_URL)

    return {
        redirect: {
            destination: getRedirectParam(),
            permanent: false,
        },
    }

}