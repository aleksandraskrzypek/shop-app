import React, { useState, useEffect } from 'react';
import './Shop.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import banan from "./img/banan.png"
import brzoskwinia from "./img/brzoskwinia.png"
import jagoda from "./img/jagoda.png"
import pomarancza from "./img/pomarancza.png"
import pomidor from "./img/pomidor.png"
import szpinak from "./img/szpinak.png"
import truskawki from "./img/truskawki.png"
import ziemniak from "./img/ziemniak.png"
import brokul from "./img/brokul.png"

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Shop() {
    const [bananprice, setBananprice] = useState(0);
    const [brzoskwiniaprice, setBrzoskwiniaprice] = useState(0);
    const [jagodaprice, setJagodaprice] = useState(0);
    const [pomaranczaprice, setPomaranczaprice] = useState(0);
    const [pomidorprice, setPomidorprice] = useState(0);
    const [szpinakprice, setSzpinakprice] = useState(0);
    const [truskawkiprice, setTruskawkiprice] = useState(0);
    const [ziemniakprice, setZiemniakprice] = useState(0);
    const [brokulprice, setBrokulprice] = useState(0);

    const [banancount, setBanancount] = useState(0);
    const [brzoskwiniacount, setBrzoskwiniacount] = useState(0);
    const [jagodacount, setJagodacount] = useState(0);
    const [pomaranczacount, setPomaranczacount] = useState(0);
    const [pomidorcount, setPomidorcount] = useState(0);
    const [szpinakcount, setSzpinakcount] = useState(0);
    const [truskawkicount, setTruskawkicount] = useState(0);
    const [ziemniakcount, setZiemniakcount] = useState(0);
    const [brokulcount, setBrokulcount] = useState(0);

    const[allprice, setAllprice] = useState(0);

    useEffect(() => {
        setAllprice(bananprice + brzoskwiniaprice + jagodaprice + pomaranczaprice + pomidorprice + szpinakprice + truskawkiprice + ziemniakprice + brokulprice);
      });


    return (
        <div className="shop-head">
            <div className="shop-body">
                <div className="shop-body-up">
                    <div className="tittle">
                        <h1>Welcome to the grocery store!</h1>
                    </div>
                    <div className="shopping-cart">
                        <h1>{allprice} $</h1>
                        <ShoppingCartIcon style={{ fontSize: 40 }} className="icon"/>
                    </div>
                </div>

                <div className="center">

                    <div className="shop-elements">
                        <div className="shop-element">
                            <img src={banan} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {bananprice===0 ? setBananprice(0) : setBananprice(bananprice - 3); banancount===0 ? setBanancount(0) : setBanancount(banancount - 1)}} />
                                <h1>{bananprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setBananprice(bananprice + 3); setBanancount(banancount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={brzoskwinia} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {brzoskwiniaprice===0 ? setBrzoskwiniaprice(0) : setBrzoskwiniaprice(brzoskwiniaprice - 5); brzoskwiniacount===0 ? setBrzoskwiniacount(0) : setBrzoskwiniacount(brzoskwiniacount - 1)}}/>
                                <h1>{brzoskwiniaprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setBrzoskwiniaprice(brzoskwiniaprice + 5); setBrzoskwiniacount(brzoskwiniacount + 1) }}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={jagoda} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {jagodaprice===0 ? setJagodaprice(0) : setJagodaprice(jagodaprice - 7); jagodacount===0 ? setJagodacount(0) : setJagodacount(jagodacount - 1)}}/>
                                <h1>{jagodaprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setJagodaprice(jagodaprice + 7); setJagodacount(jagodacount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={pomarancza} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {pomaranczaprice===0 ? setPomaranczaprice(0) : setPomaranczaprice(pomaranczaprice - 2); pomaranczacount===0 ? setPomaranczacount(0) : setPomaranczacount(pomaranczacount - 1)}}/>
                                <h1>{pomaranczaprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setPomaranczaprice(pomaranczaprice + 2); setPomaranczacount(pomaranczacount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={pomidor} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {pomidorprice===0 ? setPomidorprice(0) : setPomidorprice(pomidorprice - 4); pomidorcount===0 ? setPomidorcount(0) : setPomidorcount(pomidorcount - 1)}}/>
                                <h1>{pomidorprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setPomidorprice(pomidorprice + 4); setPomidorcount(pomidorcount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={szpinak} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {szpinakprice===0 ? setSzpinakprice(0) : setSzpinakprice(szpinakprice - 8); szpinakcount===0 ? setSzpinakcount(0) : setSzpinakcount(szpinakcount - 1)}}/>
                                <h1>{szpinakprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setSzpinakprice(szpinakprice + 8); setSzpinakcount(szpinakcount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={truskawki} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {truskawkiprice===0 ? setTruskawkiprice(0) : setTruskawkiprice(truskawkiprice - 12); truskawkicount===0 ? setTruskawkicount(0) : setTruskawkicount(truskawkicount - 1)}}/>
                                <h1>{truskawkiprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setTruskawkiprice(truskawkiprice + 12); setTruskawkicount(truskawkicount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={ziemniak} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {ziemniakprice===0 ? setZiemniakprice(0) : setZiemniakprice(ziemniakprice - 6); ziemniakcount===0 ? setZiemniakcount(0) : setZiemniakcount(ziemniakcount - 1)}}/>
                                <h1>{ziemniakprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setZiemniakprice(ziemniakprice + 6); setZiemniakcount(ziemniakcount + 1)}}/>
                            </div>
                        </div>
                        <div className="shop-element">
                            <img src={brokul} alt="" />

                            <div className="price">
                                <ArrowLeftIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {brokulprice===0 ? setBrokulprice(0) : setBrokulprice(brokulprice - 9); brokulcount===0 ? setBrokulcount(0) : setBrokulcount(brokulcount - 1)}}/>
                                <h1>{brokulprice} $</h1>
                                <ArrowRightIcon style={{ fontSize: 30 }} className="price-arrow" onClick={() => {setBrokulprice(brokulprice + 9); setBrokulcount(brokulcount + 1)}}/>
                            </div>
                        </div>
                    </div>

                    <div className="right-place">


                    {(() => {
                        if (allprice>0) {
                            return (
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Count</th>
                                <th>Price</th>
                            </tr>
                            {(() => {
                                if (banancount>0) {
                                    return (
                            <tr>
                                <td>Banana</td>
                                <td>{banancount}</td>
                                <td>{bananprice} $</td>
                            </tr>
                                )}
                            })()}
                            {(() => {
                                if (brzoskwiniacount>0) {
                                    return (
                            <tr>
                                <td>Peach</td>
                                <td>{brzoskwiniacount}</td>
                                <td>{brzoskwiniaprice} $</td>
                            </tr>
                            )}
                        })()}
                            {(() => {
                                if (jagodacount>0) {
                                    return (
                            <tr>
                                <td>Bluebarry</td>
                                <td>{jagodacount}</td>
                                <td>{jagodaprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (pomaranczacount>0) {
                                    return (
                            <tr>
                                <td>Orange</td>
                                <td>{pomaranczacount}</td>
                                <td>{pomaranczaprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (pomidorcount>0) {
                                    return (
                            <tr>
                                <td>Tomato</td>
                                <td>{pomidorcount}</td>
                                <td>{pomidorprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (szpinakcount>0) {
                                    return (
                            <tr>
                                <td>Spinach</td>
                                <td>{szpinakcount}</td>
                                <td>{szpinakprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (truskawkicount>0) {
                                    return (
                            <tr>
                                <td>Strawberry</td>
                                <td>{truskawkicount}</td>
                                <td>{truskawkiprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (ziemniakcount>0) {
                                    return (
                            <tr>
                                <td>Potato</td>
                                <td>{ziemniakcount}</td>
                                <td>{ziemniakprice} $</td>
                            </tr>
                            )}
                            })()}
                            {(() => {
                                if (brokulcount>0) {
                                    return (
                            <tr>
                                <td>Broccoli</td>
                                <td>{brokulcount}</td>
                                <td>{brokulprice} $</td>
                            </tr>
                            )}
                            })()}

                        </table>
                    )}
                    })()}
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
