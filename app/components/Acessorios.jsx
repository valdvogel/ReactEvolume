var React = require('react');

const image = require('app/img/h1.jpeg');

var Acessorio = React.createClass({
    render: function () {
        return (
            <div>
                <section className="hero_area">
                    <div className="hero_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">

                                    <h2>Aluguel de acessórios para carros</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="boxes_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="box">
                                    <h3>ENCONTRE</h3>
                                    <p>Encontre o acessório mais próximo a sua localização de acordo com seu carro e necessidade.</p>
                                    <i className="fa fa-cogs"></i>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <h3>CONTRATE</h3>
                                    <p>Contrate o acessório escolhido com segurança e conforto.</p>
                                    <i className="fa fa-exclamation-triangle"></i>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <h3>USE</h3>
                                    <p>Use o acessório para o que deseja. Passear, viajar, pedalar... Agora é pé na estrada!</p>
                                    <i className="fa fa-clipboard"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                        <section className="services">
            <h2 className="section-title">ACESSÓRIOS</h2>
            <p className="desc">Os acessórios que você precisa</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-cogs"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">SUPORTES PARA BICICLETAS</h4>
                                <p>Lorem ipsum dolor amet,consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-user-md"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">RACKS PARA TETOS</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-stethoscope"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">BAGAGEIROS DE CARGA</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">SUPORTES PARA EQUIPAMENTOS DE ESPORTES PARA ÁGUA</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-file-text-o"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">SUPORTES PARA EQUIPAMENTOS DE ESPORTES DE INVERNO</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="media">
                            <div className="media-left media-middle">
                                <i className="fa fa-heartbeat"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">BOLSAS E RACKS PARA BICICLETAS</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id pulvinar magna. Aenean accumsan iaculis lorem, nec sodales lectus auctor tempor.</p>
                            </div>
                        </div>
                    </div>    
                        
                </div>
            </div>
        </section>

        <section className="home-area">
            <div className="home_content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12"><h2 className="sub_title">NOVIDADES</h2></div>
                        <div className="home_list">
                            <ul>
                                <li className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={image} alt="Post"/>
                                        <div className="caption">
                                            <h3><a href="#">Post Title</a></h3>
                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                            <a href="#" className="btn btn-link" role="button">More</a>
                                        </div>
                                    </div>                                        
                                </li>
                                <li className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={require('app/img/h2.jpg')} className="img-responsive" alt="Post"/>
                                        <div className="caption">
                                            <h3><a href="#">Post Title</a></h3>
                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                            <a href="#" className="btn btn-link" role="button">More</a>
                                        </div>
                                    </div>                                        
                                </li>
                                <li className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={require('app/img/h3.jpeg')} className="img-responsive" alt="Post"/>
                                        <div className="caption">
                                            <h3><a href="#">Post Title</a></h3>
                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                            <a href="#" className="btn btn-link" role="button">More</a>
                                        </div>
                                    </div>                                        
                                </li>
                                <li className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={require('app/img/h4.jpeg')} className="img-responsive" alt="Post"/>
                                        <div className="caption">
                                            <h3><a href="#">Post Title</a></h3>
                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                            <a href="#" className="btn btn-link" role="button">More</a>
                                        </div>
                                    </div>                                        
                                </li>                                    
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 fbox">
                    <h4>eVolume</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue lectus diam, sit amet cursus massa efficitur sed. </p>
                    <ul className="list-inline">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>                        
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 fbox">
                    <h4>SERVIÇOS</h4>
                    <ul className="big">
                        <li><a href="#" title="">Title One</a></li>
                        <li><a href="#" title="">Title Two</a></li>
                        <li><a href="#" title="">Title Three</a></li>
                        <li><a href="#" title="">Title Four</a></li>
                        <li><a href="#" title="">Title Five</a></li>
                        <li><a href="#" title="">Title Six</a></li>
                        <li><a href="#" title="">Title Seven</a></li>
                        <li><a href="#" title="">Title Eight</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 fbox">
                    <h4>CONTENT</h4>
                    <ul className="big">
                        <li><a href="#" title="">Title One</a></li>
                        <li><a href="#" title="">Title Two</a></li>
                        <li><a href="#" title="">Title Three</a></li>
                        <li><a href="#" title="">Title Four</a></li>
                        <li><a href="#" title="">Title Five</a></li>
                        <li><a href="#" title="">Title Six</a></li>
                        <li><a href="#" title="">Title Seven</a></li>
                        <li><a href="#" title="">Title Eight</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 fbox">
                    <h4>CONTATO NOS</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><a href="tel:+902222222222"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> +90 222 222 22 22</a></p>
                    <p><a href="mailto:iletisim@agrisosgb.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> mail@awebsitename.com</a></p>
                </div>
            </div>
        </div>
        <div id="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="pull-left">&copy; 2017 EVOLUME</p>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-inline navbar-right">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">MENU ITEM</a></li>
                            <li><a href="#">MENU ITEM</a></li>
                            <li><a href="#">MENU ITEM</a></li>
                            <li><a href="#">MENU ITEM</a></li>
                            <li><a href="#">MENU ITEM</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </footer>


            </div>

        );
    }

});

module.exports = Acessorio;
