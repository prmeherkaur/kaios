import React, { Component } from 'react'
import Header from './kaiUiComponents/Header/Header'
import ListItems from './ListItems'
import SoftKey from './kaiUiComponents/SoftKey/SoftKey'
import '../styles/HomePage.css'


export default class HomePage extends Component {
     
    render() {
        return (
            <div className='mainDiv'>
               <Header text='Outlook'/>
               <ListItems></ListItems>
               <SoftKey leftText='Exit' centerText='Open' rightText='Options'></SoftKey>
             </div>
        )
    }
}
