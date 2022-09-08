import React, { Component } from 'react'
import ListBooking from '../components/ListBooking'
import Navbar from '../components/Navbar'

export class Hotels extends Component {
    render() {
        return (
            <div>
                <section className='bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50'>
                    <Navbar></Navbar>
                    <ListBooking></ListBooking>
                </section>
            </div>
        )
    }
}

export default Hotels