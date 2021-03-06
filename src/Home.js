import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (

<div className="home">
    <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
            <Product
               id="1"
               title="iOttie Easy One Touch 4 Dash & Windshield Car Mount ..."
               price={56.63}
               rating={4}
               image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
   
             />
          <Product
            id="2"
            title="Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black"
            price={11.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="3"
            title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality 
          (Wireless Charging Case included), Black – US Version"
            price={11.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for
           Phone-Call and Alexa Voice Control - Industry Leading Active Noise "
            price={122.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/51IdLe-+6kL._AC_UY218_.jpg"
          />
          <Product
            id="5"
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={56.63}
            rating={4}
            image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="6"
            title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way
           Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
            price={545.55}
            rating={5}
            image="https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg" />
        </div>
    </div>
</div>
    )
}

export default Home
