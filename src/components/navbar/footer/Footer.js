import "./footer.css"
function Footer () {

    const year = new Date().getFullYear();

    return (
        <footer>
            <h6>For any Questions and Feedback Contact Us: share2care@gmail.com</h6>
            {`Copyright © Share2Care ${year}`}
        </footer>
    )

}
export default Footer;