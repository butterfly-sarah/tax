
import 'font-awesome/css/font-awesome.min.css';
function Allservices(){
    return(
        <div className="services">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">All services</h3>
                <div className="col-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <table border="1" frame="void" rules="rows">
                    <tr className='thead'>
                        <th>#</th>
                        <th>service</th>
                        <th>Serial-code</th>
                        <th>last update</th>
                        <th>date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>#123-456ABC</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td className='green'>Completed</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>#123-456ABC</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>details</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>#123-456ABC</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td className='green'>Completed</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>lorem ipsum</td>
                        <td>#123-456ABC</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>details</td>
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Allservices;