import React from 'react'
import {Button, Card, Grid} from '@geist-ui/react'
import {Provider} from "next-auth/providers";
import {signIn} from "next-auth/client";


interface Props {
    providers: Provider[]
}

function SignInCard(props: Props): JSX.Element {
    return (
        <Card>
            <Grid.Container gap={2}>
                {Object.values(props.providers).map(function (provider: Provider): JSX.Element {
                    return (
                        <Grid xs={2} key={provider.id}>
                            <Button onClick={() => {
                                signIn(provider.id).then(r => {
                                    return
                                })
                            }}>
                                Sign in with {provider.name}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid.Container>
        </Card>
    )
}

export default SignInCard
