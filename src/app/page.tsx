import ItemCard from "~/components/ItemCard/ItemCard";

export default async function HomePage() {

  /*const session = await getServerAuthSession()

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    }
  })


  const post = await db.post.findFirst()*/

  const array = new Array(20).fill(0)

  return (
      <div className="m-5">
        <div className="flex flex-wrap justify-center">
        {array.map((_, i) => (
            <ItemCard key={i} userLink="fdsfds" itemLink="dds" image="https://images.pexels.com/photos/20241941/pexels-photo-20241941/free-photo-of-cute-cats-near-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" likes={0} name="Benchy" userImage="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" username="Gabri3445"></ItemCard>
        ))}
        </div>
      </div>
  );
}
