export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="font-bold text-gray-800 uppercase mb-4">
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="font-bold text-gray-800 uppercase mb-4">
                Contact Us
              </h2>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <i className="fas fa-envelope mr-2 text-gray-600"></i>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    info@example.com
                  </a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-facebook mr-2 text-gray-600"></i>
                  <a
                    href="https://www.facebook.com/example"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-twitter mr-2 text-gray-600"></i>
                  <a
                    href="https://twitter.com/example"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-instagram mr-2 text-gray-600"></i>
                  <a
                    href="https://www.instagram.com/example/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              All rights reserved. © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
