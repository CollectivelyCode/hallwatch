import React from 'react';
import {NextPageContext} from 'next'
import {Col, Row} from '@geist-ui/react/dist'
import SignInCard from '../../ui/modules/SignInCard'
import {getProviders, getSession, useSession} from 'next-auth/client'

export default function LoginPage({providers}: any) {
    const [session, loading] = useSession()

    return (<>
        {!session && <>
            <Row gap={0.8} justify="center" style={{marginTop: '250px'}}>
                <Col span={8}>
                    <SignInCard providers={providers}/>
                </Col>
            </Row>
        </>}
    </>)
}

export async function getServerSideProps(context: NextPageContext) {
    const providers = await getProviders()
    const session = await getSession(context)

    if (!session) {
        return {
            props: {providers}
        }
    }


    // @ts-ignore
    const url = new URL(process.env.BASE_URL + context.req.url)

    const getRedirectParam = () => {
        if (url.searchParams.get('redirect') != null) {
            return `${process.env.BASE_URl}${url.searchParams.get('redirect')}`
        }
        return process.env.BASE_URL + 'dashboard/';
    }
    console.log(process.env.BASE_URL)

    return {
        redirect: {
            destination: getRedirectParam(),
            permanent: false,
        },
    }

}
