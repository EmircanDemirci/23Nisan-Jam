import React, { Component } from 'react'

import unutulmaz1 from './../media/unutulmaz1.png'
import unutulmaz2 from './../media/unutulmaz2.jpg'
import unutulmaz3 from './../media/unutulmaz3.jpg'

import './Unutulmaz.css'

export default class Unutulmaz extends Component {
    state = {
        storys:[
            {
                "id": 0,
                "paragraph": "Ayşe ve İsmet isimli iki kardeş okul dönüşü Atatürk’ü görmek için sık sık Atatürk’ünköşkünün etrafında geziniyordu.Şanslı olacaklar ki o gün Atatürk yaveri ve arkadaşları ile köşkü dolanıyordu.Atatürk iki kardeşi görünce yanlarına gelip “Niçin burada dolaşıyorsunuz?” diye sordu.Kardeşlerden Ayşe “Sizi görmek istedik.” yanıtını verdi. Atatürk,“Peki ben kimim?” diye sorunca Ayşe ve İsmet aynı anda “Gazi Mustafa Kemal Paşa!”diye bağırdı. Atatürk gülümseyerek “Benzettiniz çocuklar ben Gazi değilim” derken iki kardeş  “Sen Gazi'sin, çünkü kimse sana benzemez” cevabını verdi.Sonrasında Ayşe öğretmen olmak istediğini söylediğindeUlu Önder Atatürk de “Biz her şeyimizi öğretmenlere borçluyuz” dedi.İsmet asker olmak istediğini söyledi.“Yurduma saldıran düşmanın kafasını kıracağım” dedi. Atatürk iki kardeşi okşadı. “Milletin bağrından tertemiz bir nesil yetişiyor.Eserimizi gözümüz arkada kalmadan onlara bırakabileceğiz. Şimdi çok huzurluyum” derken gözleri yaşardı.",
                "image": unutulmaz1
            },
            {
                "id": 1,
                "paragraph": "Atatürk Antalya'ya gidiyordu.Yolda mola verildiği bir sırada, uzaktan bir türkü sesi Atatürk'ün ilgisini çekti. Türküyü bir çocuk çoban söylüyordu.  Atatürk “Sesin çok güzel, burada da söyle de dinleyelim” dedi.Küçük çoban türküsünü söyledi.Atatürk alkışlayarak, “Bis… bis” diye bağırdı. Genç çoban anlamadı. Atatürk de, “Bis, beğendik, bir daha söyle demektir” dedi.Çoban türküyü tekrarladı. Atatürk de cebinden 50 lira çıkardı çobana verdi. Çoban paraya baktı ve “Bis, bis” diye bağırdı. Atatürk, bu zeki cevap karşısında bir 50 lira daha verdi ve yanındakilere, “Mussolini şu sahneyi görseydi, hangi millete nutuk söylediğini anlardı” dedi.",
                "image": unutulmaz2
            },
            {
                "id": 2,
                "paragraph": "1923 yılının ekim ayında Atatürk'e, ABD'den bir mektup geldi. Şöyle yazıyordu: “Sayın efendim, ben 10 yaşında Amerikalı bir çocuğum. Türkiye'ye ve yeni hükümetine büyük ilgi duyuyorum. Siz ve Bay Kemal hakkında bir röportaj okudum. Türkiye hakkında bir defterim var ve şimdiden sizin hakkınızda birçok yazı ve resim topladım. Lütfen Amerikalı bir çocuğa, bir küçük not ve bir imzalı fotoğrafınızı gönderin. Bir gün, Türkiye'yi görebileceğimi umut ediyorum. Saygılarımla. Curtis LaFrance”Atatürk mektubu okuyunca duygulandı, ancak bu kişisel ilgiden değil, kurulan bağımsız devletin etkisi olduğu içindi. Başka bir cumhurbaşkanına yazar gibi ciddi bir üslupla mektubu yanıtladı: “Bay Curtis LaFrance, mektubunuzu aldım. Türk yurdu hakkındaki ilgi ve iyi dileklerinize teşekkür ederim. İsteğiniz üzere bir fotoğrafımı gönderiyorum. Amerika'nın zeki ve çalışkan çocuklarına biricik öğüdüm; Türkler hakkında her işittiklerine gerçekmiş gibi bakmayıp, düşüncelerini bilimsel ve esaslı incelemelere dayandırmaya önem vermelidir. Başarılar ve mutluluklar dilerim, Türkiye Reisicumhuru Gazi Mustafa Kemal.”",
                "image":  unutulmaz3
            }
        ]
    }
    render() {
        return (
            <div className="unutulmaz">
                {
                    this.state.storys.map(item=>(
                        <div>
                            <p>{item.paragraph}</p>
                            <img src={item.image} alt="images"></img>
                        </div>
                    ))
                }
            </div>
        )
    }
}
