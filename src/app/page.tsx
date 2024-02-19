import MySignIn from "~/components/MySignIn"
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { minio } from "~/server/minio";

export default async function HomePage() {

  const session = await getServerAuthSession()

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    }
  })


  const post = await db.post.findFirst()

  return (
      <div>
        <MySignIn signedIn={session ? true : false} username={session?.user.name} posts={post?.name}/>
      </div>
  );
}
