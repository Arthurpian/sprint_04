import Logo from "./Logo"
import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer_01">
                <li>
                    <Logo />
                </li>
                <li>
                    <a href="#" className="footer_categorias">Sobre Nos</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Anuncie</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Politica de uso</a>
                </li>
            </div>

            <ul className="footer_02">
                <li>
                    <h3 className="footer_titulos">Para você</h3>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Noticias</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Parques</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Aventura</a>
                </li>
            </ul>

            
            <ul className="footer_03">
                <li>
                    <h3 className="footer_titulos">Eventos</h3>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Meus eventos</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Novos Eventos</a>
                </li>
                <li>
                    <a href="#" className="footer_categorias">Resultados</a>
                </li>
            </ul>

            <div className="footer_04">
                <div className="duvidas">
                    <h3>Dúvidas</h3>
                    <button className="button">Atendimentos</button>
                </div>

                <div className="footer_redes">
                    <a href="#" className="facebook">
                        <BsFacebook />
                    </a>

                    <a href="#" className="instagram">
                        <BiLogoInstagramAlt />
                    </a>
                </div>
            </div>
            <div className="footer_copyright">
                &copy; 2023 all rights reserved
            </div>
        </div>
        </>
    )
}

export default Footer