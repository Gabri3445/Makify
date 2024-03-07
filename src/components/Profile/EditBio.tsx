/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { db } from "~/server/db"

interface EditBioProps {
    id: string
}


export default async function EditBio(props: EditBioProps) {

    const data = await db.user.findUnique({
        where: {
            id: props.id
        },
        include: {
            profileInfo: true
        }
    })

    async function changeBio(formData: FormData) {
        "use server"
        const bio = formData.get("bio") ?? "";
        if (typeof bio !== "string") {
            throw new Error("Invalid bio");
        }
        if (!data?.profileInfo) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            await db.profileInfo.create({
                data: {
                    bio: bio,
                    User: {
                        connect: {
                            id: props.id
                        }
                    }
                }
            })
        }
        await db.user.update({
            where: {
                id: props.id
            },
            include: {
                profileInfo: true
            },
            data: {
                profileInfo: {
                    update: {
                        data: {
                            bio: bio
                        }
                    }
                }
            }
        })
    }

    return (
        <div className="mt-5">
            <span className="text-4xl">Bio: </span>
            <form id="form" className="w-full mt-1" action={changeBio}>
                <textarea form="form" name="bio" defaultValue={data?.profileInfo?.bio} className="resize-none w-full h-60 bg-gray-500 border border-gray-300 rounded-md"></textarea>
                <div className="flex flex-row-reverse mt-2"><input className="bg-blue-500 p-3 rounded-md cursor-pointer" type="submit"></input></div>
            </form>
        </div>
    )
}