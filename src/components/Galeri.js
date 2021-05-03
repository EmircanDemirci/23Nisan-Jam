import React, { Component } from 'react'

import photo1 from './../media/23nisan1.jpg'
import photo2 from './../media/23nisan2.jpg'
import photo3 from './../media/23nisan3.jpg'
import photo4 from './../media/23nisan4.jpg'
import photo5 from './../media/23nisan5.jpg'
import photo6 from './../media/23nisan6.jpg'
import photo7 from './../media/23nisan7.jpg'
import photo8 from './../media/23nisan8.png'
import photo9 from './../media/23nisan9.jpg'
import photo10 from './../media/23nisan10.jpg'
import photo11 from './../media/23nisan11.jpg'

import './Galeri.css'

export default class Galeri extends Component {
    state = {
        photos: [
            {
                id: 0,
                img: photo1
            }, {
                id: 1,
                img: photo2
            }, {
                id: 2,
                img: photo3
            }, {
                id: 3,
                img: photo4
            }, {
                id: 4,
                img: photo5
            }, {
                id: 5,
                img: photo6
            }, {
                id: 6,
                img: photo7
            }, {
                id: 7,
                img: photo8
            }, {
                id: 8,
                img: photo9
            }, {
                id: 9,
                img: photo10
            }, {
                id: 10,
                img: photo11
            }
        ]
    }
    render() {
        return (
            <div className="gallery">
                {
                    this.state.photos.map(items => (
                        <img src={items.img} width="700" height="500"/>
                    ))
                }
            </div>
        )
    }
}
