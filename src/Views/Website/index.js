import React, { Suspense, useRef, useState } from 'react'
import Logo from '../../Assets/img/landia.png';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import Earth from './Model/earth';
import gsap from 'gsap';
import Collections from './Model/collections';
const scripts = ["/js/jquery.pagepiling.min.js", "/js/contact_us.js", "/js/script.js"];
const Website = (props) => {
    const earhtG = useRef();
    const Camera = useRef();
    const [collect, setCollect] = useState(false);

    function InitGlobal(e) {
        gsap.to(Camera.current.position, {
            duration: 3,
            ease: "power3.inOut",
            z: 13,
            onComplete: () => {
                e.target.parentNode.classList.remove("ended")
                gsap.to(earhtG.current.position, {
                    duration: 3,
                    ease: "power3.inOut",
                    x: -5,
                    onComplete: () => {
                        document.getElementById("about").classList.add("ended");
                    }
                })
            }
        })

    }


    function AnimationLoop(phase) {
        document.getElementById(phase).classList.remove("ended")

        switch (phase) {
            case 'about':
                gsap.to(earhtG.current.rotation, {
                    duration: 3,
                    ease: "power3.inOut",
                    x: 0.5,
                    onComplete: () => {
                        document.getElementById("mision").classList.add("ended");
                    }
                })
                break;
            case 'mision':
                gsap.to(earhtG.current.rotation, {
                    duration: 3,
                    ease: "power3.inOut",
                    y: 1,
                    z: 1,
                    onComplete: () => {
                        document.getElementById("digital").classList.add("ended");
                    }
                })
                break;
            case 'digital':
                gsap.to(earhtG.current.rotation, {
                    duration: 3,
                    ease: "power3.inOut",
                    // y: 1.5,
                    z: 3,
                    onComplete: () => {
                        document.getElementById("token").classList.add("ended");
                    }
                })
                break;
            case 'token':
                gsap.to(earhtG.current.rotation, {
                    duration: 3,
                    ease: "power3.inOut",
                    y: -2,
                    onComplete: () => {
                        document.getElementById("nft").classList.add("ended");
                    }
                })
                break;
            default:
                gsap.to(earhtG.current.rotation, {
                    duration: 3,
                    ease: "power3.inOut",
                    x: 0,
                    y: 0,
                    z: 0,
                    onComplete: () => {
                        gsap.to(Camera.current.position, {
                            duration: 3,
                            ease: "power3.inOut",
                            z: 60,
                            onComplete: () => {
                                // Camera.current.lookAt(earhtG.current);
                                document.getElementById("team").classList.add("ended");
                            }
                        })
                    }
                })
                break;
        }

    }


    return (
        <>
            <div className='main-section'>
                <div className="init">
                    <img src={Logo} style={{ width: "50%" }} />
                    <div style={{ display: "flex" }}>
                        <div>
                            <a className='start' href='#!' onClick={(e) => InitGlobal(e)}>Get start</a>
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <a className='start' href='#!' onClick={() => setCollect(true)}>Buy Nft</a>
                        </div>
                    </div>
                </div>
                <div id="collection" className="collection">
                    <h1>Selecciona coleccion</h1>
                </div>
                <div id="about" className="about">
                    <div className='texto'>
                        <h1>Que es landia?</h1>
                        <p>La visi??n de Landia es potenciar, crear, desarrollar e integrar formas de fomento econ??mico que sean simbi??ticas a nivel medioambiental, social y permitan el desarrollo del esp??ritu humano y cient??fico. Con esto se busca que los activos naturales que permiten la vida en la tierra, adquieran un valor cuantificable econ??micamente en el blockchain a trav??s de un marketplace cuya infraestructura base incluye galer??as NFT, Token, Turismo Digital, Espacios de Disfrute F??sicos y dentro de un Metaverso realista con juegos Play to Earn, as?? como la conexi??n e integraci??n de Landia con otros ecosistemas y viceversa.
                            <br />El logro fundamental es generar una econom??a y moneda respaldada en tierra conservada, preservada, o sea en condiciones de car??cter regenerativo, y del disfrute y uso trascendental de la misma en f??sico y metaverso, para as?? adem??s poder mitigar los efectos del cambio clim??tico, la VI extinci??n masiva y el desplazamiento masivo de seres humanos.
                        </p>
                        <a onClick={(e) => AnimationLoop('about')} className='start'>Siguiente</a>
                    </div>
                </div>
                <div id="mision" className="about">
                    <div className='texto'>
                        <h1>Mision</h1>
                        <p>Landia es una plataforma DeFi cuya misi??n principal es regenerar 250 millones de hect??reas de bosque en los pr??ximos 14 a??os sin caer en pr??cticas monocultivistas, a trav??s de planes de manejo forestal y ambiental premeditados. A trav??s de nuestra econom??a circular, pol??ticas de gobernanza y consenso a trav??s de nuestro DAO se busca tomar las mejores decisiones en conjunto para generar riqueza y que esta sea redistribuida a trav??s de nuestro ecosistema y as?? lograr una expansi??n masiva.</p>

                        <a onClick={() => AnimationLoop('mision')} className='start'>Siguiente</a>
                    </div>
                </div>

                <div id="digital" className="about">
                    <div className='texto'>
                        <h1>De lo digital a lo f??sico y de lo f??sico a lo digital</h1>
                        <p>Landia genera una econom??a que va del mundo f??sico a lo digital y viceversa, logrando as?? impactar y generar necesidad en ambas esferas de las 2 realidades y en el punto de encuentro entre ambas: 1. la Realidad F??sica 2.la realidad del Metaverso Landia 3. Su Conexi??n con el Resto de Ecosistemas, en aras de una ineludible transici??n hacia una digitalizaci??n. Esta transici??n conlleva la responsabilidad de transicionar tambi??n hacia formas simbi??ticas y regenerativas en temas medioambientales y sociales.</p>

                        <a onClick={() => AnimationLoop('digital')} className='start'>Siguiente</a>
                    </div>
                </div>


                <div id="token" className="about">
                    <div className='texto'>
                        <h1>Token respaldado por tierra</h1>
                        <p>El desarrollo y compatibilidad del ecosistema Landia con otros organismos y ecosistemas de manera fluida es fundamental, para as?? lograr establecer una econom??a y moneda respaldada en tierra conservada, preservada, o sea en condiciones de car??cter regenerativo, y del disfrute trascendental de la misma, para as?? adem??s poder mitigar los efectos del cambio clim??tico, la VI extinci??n masiva y el desplazamiento masivo de seres humanos.</p>

                        <a onClick={() => AnimationLoop('token')} className='start'>Siguiente</a>
                    </div>
                </div>

                <div id="nft" className="about">
                    <div className='texto'>
                        <h1>NFTs Fundraising</h1>
                        <p>La econom??a de tokens no fungibles (NFT) es fundamental para el marketplace de Landia, ya que permite tokenizar valiosos activos naturales y que estos puedan circular y ser reconocidos financieramente. A trav??s de los NFTs se realizar?? el primer fundraising para capitalizaci??n del proyecto y as?? comenzar a ejecutar nuestro roadmap.</p>

                        <a onClick={() => AnimationLoop('nft')} className='start'>Siguiente</a>
                    </div>
                </div>

                <div id='team' className="team">
                    <h1>The beatiful Team</h1>
                    <div style={{ display: "flex" }}>
                        <div className='tooltip2' style={{ marginRight: 10, cursor: "pointer" }}>
                            <img src={"/images/testimonial-img1.jpg"} style={{ width: 150 }} />
                            <p>Arturo Montanaro</p>
                            <span className='tooltiptext tooltiptextL'>Emprendedor<br />
                                Visionario<br />
                                Story Teller<br />
                                Estudi?? derecho (Universidad de CR), Teoria e Historia y Estudios Regionales de Asia y ??frica (Humboldt Universit??t)<br />
                                +6 a??os de experiencia como Terapeuta Hol??stico<br />
                                +2 a??os de Experiencia en el sector de Turismo<br />
                                Confundador del Horus Project<br />
                                Habla fluidamente Ingl??s, Espa??ol, Franc??s, Italiano, Alem??n<br />
                                Amplia experiencia internacional<br />
                                Creyente y practicante de la permacultura y la trascendencia </span>
                        </div>
                        <div className='tooltip2'>
                            <img src={"/images/testimonial-img2.jpg"} style={{ width: 150 }} />
                            <p>Guillermo Gharib</p>
                            <span className='tooltiptext tooltiptextR'>
                                +15 A??os en Posiciones Gerenciales gestionando equipos de 50 a +250 empleados.<br />
                                +10 A??os de experiencia en finanzas.<br />
                                +7 a??os de experiencia en Biz Dev<br />
                                Customer Engagement & Sales Experience en Am??rica del Norte, Am??rica del Sur y mercados CAM.<br />
                                Seguimiento comprobado de ??xito en la gesti??n de campa??as u organizaciones de las que he formado parte.<br />
                                Certificaci??n en PMP, Six Sigma, ITIL, manejo de la ira, manejo del tiempo, habilidades blandas, BI y ciencia de datos.
                            </span>
                        </div>
                    </div>
                    <a onClick={(e) => InitGlobal(e)} className='start'>Sobre Landia</a>
                </div>

            </div>


            <Canvas style={{ width: "100vw", height: "100vh" }}>

                <ambientLight intensity={0.5} />
                <PerspectiveCamera ref={Camera} position={[0, 0, 60]} makeDefault />
                <Sky />
                {/* <OrbitControls /> */}
                <Suspense>
                    {collect
                        ? <Collections />
                        : <Earth earhtG={earhtG} />
                    }
                </Suspense>
            </Canvas>
        </>
    )
}

export default Website
