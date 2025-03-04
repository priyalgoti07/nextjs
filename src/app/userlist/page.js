import Button from "./Button";

async function userList() {
    const result = await fetch('https://dummyjson.com/users');
    const data = await result.json();
    return data.users
    console.log("Data", data);
}
export default async function page() {
    let Users = await userList();
    console.log("users=================>", Users)
    return (
        <div>
            <h1 className="font-bold text-[14px] text-blue-500">CatList</h1>
            {Users.map((user) => (
                <div key={user.id}>
                    <p><strong>User Name:</strong>{user.firstName}</p>
                    <Button  user={user}/>
                </div>
            ))}
        </div>
    )
}