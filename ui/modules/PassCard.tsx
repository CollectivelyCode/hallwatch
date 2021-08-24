import {Button, Fieldset} from "@geist-ui/react";
import React from "react";
import useSWR from "swr";




function PassCard(uid) {
    const user = useSWR(`../api/users/${uid}/`)
    const pass = useSWR(`../api/users/${uid}/pass`)
    return (
        <Fieldset>
            <Fieldset.Title></Fieldset.Title>
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
