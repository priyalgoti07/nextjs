import Loading from './loading'
async function getUserList() {
    const result = await fetch("https://dummyjson.com/users");
    const data = await result.json()
    return data.users
}
export default async function Users() {
    const showUserList = await getUserList();
    console.log("showUserList==============>", showUserList)
    return (
        <div>
            <h1>Users Name List</h1>
            {showUserList ?
                showUserList?.map((user) => {
                    return (
                        <h1 key={user.id}>{user.firstName}</h1>
                    )
                })
                : <Loading />}
            { }
        </div>
    )
}