import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          {/* products by brand */}
          <FooterList>
            <h3 className="text-lg font-bold mb-5">Shop Categories</h3>
            <div className="text-base flex flex-col">
              <Link href="#" className="mb-2">
                Johnnie Walker
              </Link>
              <Link href="#" className="mb-2">
                Grey Goose
              </Link>
              <Link href="#" className="mb-2">
                Patrón{" "}
              </Link>
              <Link href="#" className="mb-2">
                Hendrick&apos;s
              </Link>
              <Link href="#" className="mb-2">
                Jameson{" "}
              </Link>
            </div>
          </FooterList>
          {/* customer service */}
          <FooterList>
            <h3 className="text-lg font-bold mb-5">Customer Serivce</h3>
            <div className="text-base flex flex-col">
              <Link href="#" className="mb-2">
                Contact Us
              </Link>
              <Link href="#" className="mb-2">
                Shipping Policy
              </Link>
              <Link href="#" className="mb-2">
                Returns & Exchanges
              </Link>
              <Link href="#" className="mb-2">
                FAQs
              </Link>
            </div>
          </FooterList>
          {/* about us section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-5">About Us</h3>
            <p className="mb-2">
              Indulge in the epitome of taste and refinement at Spirit Haven,
              your go-to destination for a diverse array of premium liquors. Our
              curated selection showcases renowned brands celebrated for their
              heritage and craftsmanship. From the iconic Johnnie Walker Scotch
              Whisky to the pristine Grey Goose Vodka and the distinguished
              Patrón Tequila, each bottle tells a unique story of excellence.
            </p>
            <p>
              &copy;{new Date().getFullYear()} Spirit~Haven. All rights
              reserved.
            </p>
          </div>
          {/* social icons */}
          <FooterList>
            <h3 className="text-lg font-bold mb-5">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#" className="mb-2">
                <MdFacebook size={24} />
              </Link>
              <Link href="#" className="mb-2">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#" className="mb-2">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#" className="mb-2">
                <AiFillYoutube size={24} />
              </Link>
              <Link href="#" className="mb-2">
                <AiFillLinkedin size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
