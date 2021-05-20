import React, { ReactComponentElement } from 'react'
import { Card, Button, Grid } from '@geist-ui/react'
import { AppProviders } from 'next-auth'


export interface Props{
    providers: AppProviders
}

function SignInCard(props: Props) {
    return (
        <>
            <Card>
                <Grid.Container gap={2}>

                    {Object.values(props.providers).map((provider) => {
                        return (
                            <Grid key={provider.name} xs={2}>
                                <Button onClick={() => { signIn(provider.id) }}>
                                    Sign in with {provider.name}
                                </Button>
                            </Grid>
                        )

                    })}
                </Grid.Container>
            </Card>
        </>
    )
}

export default SignInCard