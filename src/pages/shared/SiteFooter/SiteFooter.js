import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const SiteFooter = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt="" className="h-6" />
              <h3 className="text-2xl font-medium">
                <span className="text-orange-600">Elect</span>Man
              </h3>
            </div>
          </Link>
          <Footer.LinkGroup className='justify-center my-2 md:my-auto'>
                <Link to='/' className='px-3'>About</Link>
                <Link to='/' className='px-3'>Privacy Policy</Link>
                <Link to='/' className='px-3'>Contact</Link>
            </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="ElectMan" year={2022} />
      </div>
    </Footer>
  );
};

export default SiteFooter;
