import { db } from "~/server/db";

interface EditUsernameProps {
    id: string
}

const EditUsername = (props: EditUsernameProps) => {
    async function changeUsername(formData: FormData) {
        "use server"
        const username = formData.get("username");
        if (typeof username !== "string") {
            throw new Error("Invalid username");
        }
        await db.user.update({
            where: {
                id: props.id
            },
            data: {
                name: username
            }
        })
    }
    return (
        <form className="mt-5 flex justify-between" action={changeUsername}>
            <div className="flex items-center">
                <label className="mr-3" htmlFor="username">Change your username (Please refresh the page to see the changes): </label>
                <input required className="bg-gray-500 caret-white rounded-md border border-white" type="text" id="username" name="username"></input>
            </div>
            <input className="bg-blue-500 p-3 rounded-md cursor-pointer" type="submit"></input>
        </form>
    );
};

export default EditUsername;