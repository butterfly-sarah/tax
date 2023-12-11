
import 'font-awesome/css/font-awesome.min.css';
function Perpapers(){
    return(
        <div className="services">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">personal papers</h3>
                <div className="col-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <table border="1" frame="void" rules="rows">
                    <tr className='thead'>
                        <th>#</th>
                        <th>document</th>
                        <th>status</th>
                        <th>upload date</th>
                        <th>last modified</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>personal ID</td>
                        <td className='green'>valid</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>view</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>tax card</td>
                        <td className='red'>not valid</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>view</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>commerical register</td>
                        <td className='red'>not valid</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>upload</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>establishment contract</td>
                        <td className='green'>valid</td>
                        <td>12-12-2024</td>
                        <td>12-12-2024</td>
                        <td>view</td>
                        <td>edit</td>
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
export default Perpapers;