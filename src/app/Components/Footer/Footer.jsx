// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-bold text-black">COMPANY</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Who Are We</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black">RESOURCES</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black">WORK</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Video</a>
                </li>
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Shoot</a>
                </li>
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Post</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black">SERVICES</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Video</a>
                </li>
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Shoot</a>
                </li>
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Post</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black">CONTACT</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Talk to us</a>
                </li>
                <li className="text-gray-600 hover:text-black">
                  <a href="#">Collab</a>
                </li>
              </ul>
            </div>
          </div>
  
        
          <div className="border-t border-gray-300 my-8"></div>
  
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              Copyright ©2023 Red Bangle
            </p>
            <div className="flex space-x-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Legal</a>
              <a href="#" className="hover:text-black">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  