import React from "react";
import traveloka from "../image/traveloka.svg";
import secured from "../image/secured.svg"
import secured2 from "../image/secured2.svg"
import iata from "../image/iata.svg"
import bsi from "../image/bsi.webp"
import pci from "../image/pci.webp"
import bct from "../image/bct.webp"
import partner from "../image/partner.svg"
import ggplay from "../image//ggplay.svg"
import "./Footer.css"
import { width } from "@mui/system";
function Footer(){
    return(
        <div className="main-footer">
            <div className="container" style={{width:1080}}>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={traveloka}></img>
                        <div>
                            <img src={secured} className="img"></img>
                            <img src={secured2} className="img"></img>
                            <img src={iata} className="img"></img>
                            <img src={bsi} className="img"></img>
                            <img src={pci} className="img"></img>
                            <img src={bct} className="img"></img>
                            <img src={bct} className="img"></img>
                          
                        </div>
                        <div className="box">
                            <img src={partner}></img>
                            <div>
                                hop tac voi traveloka
                            </div>
                        </div>
                        <h5>Đối tác thanh toán</h5>
                        <div>
                            <img src={secured} className="img"></img>
                            <img src={secured2} className="img"></img>
                            <img src={iata} className="img"></img>
                            <img src={bsi} className="img"></img>
                            <img src={secured} className="img"></img>
                            <img src={secured2} className="img"></img>
                            <img src={iata} className="img"></img>
                            <img src={bsi} className="img"></img>
                            <img src={secured} className="img"></img>
                            <img src={secured2} className="img"></img>
                            <img src={iata} className="img"></img>
                            <img src={bsi} className="img"></img>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className="categories">Về Traveloka</h5>
                        <ul className="list-unstyled">
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Cách đặt chỗ</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Liên hệ với chúng tôi</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">trợ giúp</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">tuyển dụng</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">về chúng tôi</a>
                            </li>
                        </ul>
                        <h5 className="categories">Theo dõi chúng tôi trên</h5>
                        <ul className="list-unstyled">
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Twitter</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Facebook</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Instagram</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="categories">Sản phẩm</h5>
                        <ul className="list-unstyled">
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Vé máy bay</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Khách sạn</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">JR Pass</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Combo tiết kiệm</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Xperience</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Car Rental</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Biệt thự</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Căn hộ</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Đưa đón sân bay</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="categories">Khác</h5>
                        <ul className="list-unstyled">
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Traveloka Affiliate</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Traveloka Blog</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Chính sách quyền riêng tư</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Điều khoản & Điều kiện</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Quy chế hoạt động</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Đăng ký nơi nghỉ của bạn</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Đăng ký doanh nghiệp hoạt động du lịch của bạn</a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Khu vực báo chí</a>
                            </li>
                        </ul>
                        <h5 className="categories">Về Traveloka</h5>
                        <ul className="list-unstyled">
                            <li className="afooter"> 
                                <a href="#" style={{textDecoration: 'none'}} className="alink"><img src={ggplay} className="img"></img></a>
                            </li>
                            <li className="afooter">
                                <a href="#" style={{textDecoration: 'none'}} className="alink">Cách đặt chỗ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;