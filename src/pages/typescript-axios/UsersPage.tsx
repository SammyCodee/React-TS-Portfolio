import { getUsers } from "pages/typescript-axios/users";

export default async function Userspage() {
    const userResponse = await getUsers({ limit: 10, page: 1 });

    if (userResponse.code === "error") {
        return <div>{userResponse.error.message}</div>;
    }

    return (
        <div>
            {userResponse.data.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}
