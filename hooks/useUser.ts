import { useState, useEffect } from 'react';
import useSWR from 'swr'


function useUser(uid){
    const { data, error } = useSWR(`${process.env.PUBLIC_URL}/api/user/${uid}`)

    return mongoose.
}
