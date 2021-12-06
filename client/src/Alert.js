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


function Aert() {
    return (
        <div>
                <Alert variant='info'>
    This is a info alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
            
        </div>
    )
}

export default Aert
