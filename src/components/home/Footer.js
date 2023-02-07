import "./footer.css";


const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>site dev</h3>
          <p>© {new Date().getFullYear()} </p>
        </div>
      </footer>
    );
  };

export default Footer;