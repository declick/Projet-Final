
const UserList = () =>{
    return(
            <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { User.map((user, index) => (
                        <tr key={ user.id }>
                            <td>
                                <Link to={`/edit/${user.id}`} className="">Edit</Link>
                                <button onClick={ () => deleteUser(user.id) } className="">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )    
}

