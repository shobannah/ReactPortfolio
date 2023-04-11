const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="text-center">{`Copyright © Shobannah Ally ${year}`}</footer>;
  };
  
  export default Footer;