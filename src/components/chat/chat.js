import './chat.css'
import logo from '../../assets/user (11).png'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Chat(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
        <div className='chat p-4 position-relative'>
            <div className='d-flex'>
            <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50" height="50" />
            <h5 className='my-auto mx-3'>username</h5>
            </div>
            <hr/>
            <div className='msgs'>
            <div className='row my-2'>
                    <div className='col-1'>
                    <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50"/>
                    </div>
                    <div className='col-11 my-auto'>
                        <p className='receive my-auto'>Hi! how are you?</p>
                    </div>
                </div>
                <div className='row my-2'>
                    <div className='col-1'>
                    <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50"/>
                    </div>
                    <div className='col-11 my-auto'>
                        <p className='receive my-auto'>I hope you are ok</p>
                    </div>
                </div>
                <div className='row my-2'>
                    <div className='col-1'>
                    <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50"/>
                    </div>
                    <div className='col-11 my-auto'>
                        <p className='receive my-auto'>what is tax hub?</p>
                    </div>
                </div>
                <div className='d-flex my-2'>
                    <div className='ms-auto'>
                        <p className='send my-auto'>Iam ok</p>
                    </div>
                </div>
                <div className='d-flex my-2'>
                    <div className='ms-auto'>
                        <p className='send my-auto'>tax hub is a website that helps with tax opertaions</p>
                    </div>
                </div>
                <div className='row my-2'>
                    <div className='col-1'>
                    <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50"/>
                    </div>
                    <div className='col-11 my-auto'>
                        <p className='receive my-auto'>free palestine</p>
                    </div>
                </div>
                
            </div>
            <div className='position-absolute text d-flex px-sm-0 px-md-5'>
                <div className=' w-100 d-flex justify-content-between px-3'>
                <input type='text' className='input' placeholder='text message'/>
                <button className='' type='button'><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Chat