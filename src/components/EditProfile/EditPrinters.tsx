/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { db } from "~/server/db"

interface EditBioProps {
    id: string
}

export default async function EditPrinters(props: EditBioProps) {

    const user = await db.user.findUnique({
        where: {
            id: props.id
        },
        include: {
            profileInfo: true
        }
    })

    if (user) {
        const printers = await db.printer.findMany({
            where: {
                profileInfoId: user.profileInfoId ?? ""
            },
            select:{
                name: true
            }
        }) //this returns null if profileInfo has not been created
        async function changePrinters(formData: FormData) {
            "use server"
            const printers = formData.get("printers") ?? "";
            if (typeof printers !== "string") {
                throw new Error("Invalid bio");
            }
            
            if (!user?.profileInfo) {
                const profileInfo = await db.profileInfo.create({
                    data: {
                        User: {
                            connect: {
                                id: props.id
                            }
                        },
                    }
                })
                await db.printer.createMany({
                    data: printers.split(", ").map((printer) => ({name: printer.trim(), profileInfoId: profileInfo.id}))
                })
                return;
            }
            const printersSeparated = printers.split(",").map((printer) => ({name: printer.trim(), profileInfoId: user.profileInfoId!}));
            await db.printer.deleteMany({
                where:{
                    profileInfoId: user.profileInfoId!
                }
            })
            await db.printer.createMany({
                data: printersSeparated
            })
        }

        return (
            <div className="mt-5">
                <span className="text-4xl">Printers: </span>
                <div className="text-gray-400">(Split each printer with a comma)</div>
                <form id="printerForm" className="w-full mt-1" action={changePrinters}>
                    <textarea form="printerForm" name="printers" defaultValue={printers.map((printer) => printer.name).join(", ")} className="resize-none w-full h-40 bg-gray-500 border border-gray-300 rounded-md"></textarea>
                    <div className="flex flex-row-reverse mt-2"><input className="bg-blue-500 p-3 rounded-md cursor-pointer" type="submit"></input></div>
                </form>
            </div>
        )
    }
}