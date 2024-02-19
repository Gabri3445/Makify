"use client"

import { signIn, signOut } from "next-auth/react";
import { minio } from "~/server/minio";
import { upload } from "~/components/upload";



const MySignIn = ({signedIn, username, posts}) => {
  const click =  async() => {
    await signIn()
  }

  const click2 = async() => {
    await signOut()
  }

  return (
      <div>
        <button onClick={click}>Sign In</button><br></br>
        <button onClick={click2}>Sign Out</button><br></br>
        {signedIn ? `Signed in as ${username}` : "Not signed in"} <br></br>
        <form action={upload}>
          <input name="file" id="file" type="file" /><br></br>
          <input type="submit"></input>
        </form>
      </div>

  );
}

export default MySignIn;