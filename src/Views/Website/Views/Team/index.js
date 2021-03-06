import React from 'react'

const Team = () => {
    return (
        <section class="section bg-team" id="page3">
            <div class="bg-overlay bg-black opacity-4"></div>
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-md-6 my-auto">
                        <div id="testimonial-quote" class="owl-carousel">
                            <div class="item">
                                <div class="testimonial-quote whitecolor">
                                    <div class="team-img mb-4"><img src="/images/testimonial-img1.jpg" alt="img" /></div>
                                    <h1 class="font-weight-light mb-3 alt-font">Arturo Montanaro</h1>
                                    <div class="mb-3 testimonial-line wow fadeInleft"></div>
                                    <div class="mb-1 mb-md-5"> <span>CEO</span></div>
                                    <div class="team-description mb-1 mb-md-5"><p class="m-0">Texto Texto</p></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="testimonial-quote whitecolor">
                                    <div class="team-img mb-4"><img src="/images/testimonial-img2.jpg" alt="img" /></div>
                                    <h1 class="font-weight-light mb-3 alt-font">Guillermo Gharib</h1>
                                    <div class="mb-3 testimonial-line wow fadeInleft"></div>
                                    <div class="mb-5"> <span>COO</span></div>
                                    <div class="team-description mb-5"><p>+15 Años en Posiciones Gerenciales gestionando equipos de 50 a +250 empleados.<br />
                                        +10 Años de experiencia en finanzas.<br />
                                        +7 años de experiencia en Biz Dev<br />
                                        Customer Engagement & Sales Experience en América del Norte, América del Sur y mercados CAM.<br />
                                        Seguimiento comprobado de éxito en la gestión de campañas u organizaciones de las que he formado parte.<br />
                                        Certificación en PMP, Six Sigma, ITIL, manejo de la ira, manejo del tiempo, habilidades blandas, BI y ciencia de datos.</p></div>
                                </div>
                            </div>

                            {/* <div class="item">
                        <div class="testimonial-quote whitecolor">
                            <div class="team-img mb-4"><img src="/images/testimonial-img3.jpg" alt="img"/></div>
                            <h1 class="font-weight-light mb-3 alt-font">Tena Walkin</h1>
                            <div class="mb-3 testimonial-line wow fadeInleft"></div>
                            <div class="mb-5"> <span>Stack Developer </span></div>
                            <div class="team-description mb-5"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas.</p></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-quote whitecolor">
                            <div class="team-img mb-4"><img src="/images/testimonial-img4.jpg" alt="img"/></div>
                            <h1 class="font-weight-light mb-3 alt-font">Elizabeth Swann</h1>
                            <div class="mb-3 testimonial-line wow fadeInleft"></div>
                            <div class="mb-5"> <span>Node Designer</span></div>
                            <div class="team-description mb-5"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas.</p></div>
                        </div>
                    </div> */}
                        </div>
                        <div id="owl-thumbs" class="owl-dots">
                            <button class="owl-dot active link"><img src="/images/testimonial-img1.jpg" alt="img" /></button>
                            <button class="owl-dot link"><img src="/images/testimonial-img2.jpg" alt="img" /></button>
                            <button class="owl-dot link"><img src="/images/testimonial-img3.jpg" alt="img" /></button>
                            <button class="owl-dot link"><img src="/images/testimonial-img4.jpg" alt="img" /></button>
                        </div>
                        <div class="team-item d-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team