import React from "react";
import FooterText from "./FooterLinks";

const Footer = () => {
  const FooterLinkText = [
    {
      key:1,
      City: "Lahore",
    },
    { 
      key:2,
      City: "Karachi",
    },
    {
      key:3,
      City: "Islamabad",
    },
    {
      kwy:4,
      City: "Peshawar",
    },
    {
      key:5,
      City: "Faisalabad",
    },
  ];
  // const FooterLinksText = FooterLinkText.map((text, key) => {
  //   return <FooterText name={text.City} />;
  // });
  return (
    <footer>
      <div class="footer-top-wrap">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 py-2">
              <p class="underline-txt">Top Cities </p>
            </div>
            <div class="col">
          {FooterLinkText.map((text) => <FooterText id={text.id} name={text.City} />)}
       
            </div>
            {/* <div class="col">
        <ul class="footer-links">
        {FooterLinksText}
            </ul>
            </div>
            <div class="col">
        <ul class="footer-links">
        {FooterLinksText}
            </ul>
            </div>
            <div class="col">
        <ul class="footer-links">
        {FooterLinksText}
            </ul>
            </div>
            <div class="col">
        <ul class="footer-links">
        {FooterLinksText}
            </ul>
            </div> */}
         
          </div>
        </div>
      </div>
      <div class="footer-bottom-wrap">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 py-2">
              <div class="tagline-wrap">
                <h5 class="bold">
                  Tagline that
                  <br /> define the compnay
                </h5>
              </div>
            </div>
            <div class="col-sm-7 py-2">
              <div class="row">
                <div class="col">
                  <ul class="footer-links">
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Become a host
                      </a>
                    </li>
                    <li>
                      <a
                        href="Service-provider.html"
                        class="underline-link-blk"
                      >
                        Become a Service Provider
                      </a>
                    </li>
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Become a Captain
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="footer-links">
                    <li>
                      <a href="#/" class="underline-link-blk">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="footer-links">
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#/" class="underline-link-blk">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 py-2">
              <div class="copy-right-wrap custom-flex-between">
                <p>c 2021 copyright</p>
                <ul class="social-icons-ul custom-flex-start">
                  <li>
                    <a href="#/" class="social-media-links">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/" class="social-media-links">
                      <i class="fa fa-globe" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/" class="social-media-links">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/" class="social-media-links">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
