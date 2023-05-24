const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer text-center">{`Copyright © Shobannah Ally ${year}`}</footer>;
  };
  
  export default Footer;