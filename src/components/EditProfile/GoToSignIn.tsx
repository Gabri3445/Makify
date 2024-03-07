"use client"

import { signIn } from "next-auth/react"

export default function GoToSignIn () {
    void signIn();
    return <></>
}