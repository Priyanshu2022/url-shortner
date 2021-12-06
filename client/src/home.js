import React,{useState} from 'react'
import './home.css'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
import {Redirect} from 'react'
import axios from 'axios'
import {Alert} from 'react-bootstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {render} from 'react-dom'
import Alet from './Alert'
import Swal from 'sweetalert2'

toast.configure();
function Home() {
    const [url, seturl] = useState('')
    const urlSubmit=async(e)=>{
        e.preventDefault()
         const data=await axios.post('/', {
            full:url
          })
          .then(function (response) {
            // toast(`http://localhost:5000/${response.data}`,{autoClose:false})
            Swal.fire(`http://localhost:5000/${response.data}`)

          })
          .catch(function (error) {
            console.log(error);
          });
          

        }
    
    const handleChange=(e)=>{
        seturl(e.target.value)
    }
    return (
        <div>
            <Header/>
            <form className="form-c" method="" onSubmit={urlSubmit}>
                <input type="text" id="url" name="url" placeholder="Url" onChange={handleChange} />
                <input type="submit" value="Tiny Url" />
            </form>

            
        </div>
    )
}

export default Home
