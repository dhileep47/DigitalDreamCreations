import logo from "./assest/logo.jpg";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">DIGITAL DREAM CREATIONS</span>
        </a>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&to=digitaldream7474@gmail.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email Us
            </a>
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
