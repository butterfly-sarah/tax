import './users.css'
import 'font-awesome/css/font-awesome.min.css';
function Users(){
    return(
        <div className="users">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">All users</h3>
                <div className="col-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <table border="1" frame="void" rules="rows">
                    <tr className='thead'>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>company</th>
                        <th>date</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>someone@gmail.com</td>
                        <td>taxes</td>
                        <td>12-12-2024</td>
                        <td>edit</td>
                        <td className='red'>Delete</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>someone@gmail.com</td>
                        <td>taxes</td>
                        <td>12-12-2024</td>
                        <td>edit</td>
                        <td className='red'>Delete</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>someone@gmail.com</td>
                        <td>taxes</td>
                        <td>12-12-2024</td>
                        <td>edit</td>
                        <td className='red'>Delete</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>someone@gmail.com</td>
                        <td>taxes</td>
                        <td>12-12-2024</td>
                        <td>edit</td>
                        <td className='red'>Delete</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Users;