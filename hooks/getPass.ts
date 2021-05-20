import { useState, useEffect } from 'react';
import useSWR from 'swr'


function getPass(){
    const { err, data } = useSWR(`${process.env.PUBLIC_URL}/api/`)
}