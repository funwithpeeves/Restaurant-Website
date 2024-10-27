import { Facebook, Instagram, Twitter } from "@mui/icons-material"


const Footer = () => {
  return (
    <div className="footer">
    <div className="socialMedia">
    <p> &copy; 2022 burger33.com</p>
    <Instagram />
    <Twitter />
    <Facebook />
    </div>
    </div>
  )
}

export default Footer