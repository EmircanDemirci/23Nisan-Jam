import React, { Component } from 'react'
import './Sozler.css'
export default class Sozler extends Component {
    state={
        sozler:[
            {
                "id":0,
                "paragraph":"*Egemenlik ulusundur. Türkiye Büyük Millet Meclisi’nden başka hiçbir makam ulusun alınyazısında etkin olamaz.-Atatürk"
            },
            {
                "id":1,
                "paragraph":"*Ulusal egemenlik, ulusun namusudur, onurudur, şerefidir. 23 Nisan Ulusal Egemenlik Ve Çocuk Bayramı kutlu olsun"
            },
            {
                "id":2,
                "paragraph":"*İnanıyoruz ki, Yeni Türkiye’nin öz cevheri Ulusal Egemenliktir. Ulusun kayıtsız şartsız egemenliğidir.-Atatürk"
            },
            {
                "id":3,
                "paragraph":"*Türkler yüzyıllardan beri özgür ve bağımsız yaşamış ve bağımsızlığı, yaşam gereği saymış bir kavmin yiğit çocuklarıdır.-Atatürk"
            },
            {
                "id":4,
                "paragraph":"*Türk milletinin geleceği, bugünkü çocuklarının doğru görüşü ve yorulmak bilmeyen çalışma azmi ile büyük ve parlak olacaktır."
            },
            {
                "id":5,
                "paragraph":"*Özgürlük ve bağımsızlık benim karakterimdir.-Atatürk "
            },
            {
                "id":6,
                "paragraph":"*Bugünün küçükleri, yarının büyükleridir. Vatanı korumak, çocukları korumakla başlar. Egemen olmayan boyun eğmek zorunda kalır.-W. Shakespeare"
            },
            {
                "id":7,
                "paragraph":"*Türk Milletinin istikbali bugünkü çocukların isabetli görüşü ve yorulmak istidadında olmayan çalışma azmi ile büyük ve parlak olacaktır. (Atatürk) 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kutlu olsun"
            },
            {
                "id":8,
                "paragraph":"*Yarının teminatı olan çocuklarımıza yarının gözüyle bakalım ki yarınlarımız aydınlık olsun 23 Nisan Ulusal Egemenlik Ve Çocuk Bayramınız Kutlu Olsun."
            }
        ]
    }
    render() {
        return (
            <div className="sozler">
            {
                this.state.sozler.map(item=>(
                    <div>
                        <p>{item.paragraph}</p>
                    </div>
                ))
            }
        </div>
        )
    }
}
