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
                        
                        <div className="col-sm-9 home_bottom">
                            <h2 className="sub_title">REFERÊNCIAS</h2>
                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="carousel slide" data-ride="carousel" data-type="multi" data-interval="6000" id="myCarousel">
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <div className="col-md-2 col-sm-6 col-xs-12 p10">
                                                <a href="#"><img src={require('app/img/l1.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12 p10">
                                                <a href="#"><img src={require('app/img/l2.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l3.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l4.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l5.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l6.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l7.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l8.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12 p10">
                                                <a href="#"><img src={require('app/img/l1.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12 p10">
                                                <a href="#"><img src={require('app/img/l2.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l3.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l4.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l5.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l6.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l7.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-2 col-sm-6 col-xs-12">
                                                <a href="#"><img src={require('app/img/l8.jpg')} className="img-responsive" alt="Reference"/></a>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
                                    <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-sm-3">
                            <h2 className="sub_title w10">CONTATO</h2>
                            <div className="clearfix"></div>
                            <div className="login-form-1">
                                <form id="login-form" className="text-left">
                                    <div className="login-form-main-message"></div>
                                    <div className="main-login-form">
                                        <div className="login-group">
                                            <div className="form-group">
                                                <label for="ad" className="sr-only">Nome</label>
                                                <input type="text" className="form-control" id="ad" name="ad" placeholder="Nome"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="tel" className="sr-only">Telefone</label>
                                                <input type="text" className="form-control" id="tel" name="tel" placeholder="Telefone"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                                    </div>
                                </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

            </div>

        );
    }

});

module.exports = Acessorio;
