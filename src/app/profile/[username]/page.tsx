import Profile from "~/components/Profile/Profile";

export default function ProfilePage({ params }: { params: { username: string } }) {
    
    return (
        <div>
            <Profile></Profile>
        </div>
    )
}