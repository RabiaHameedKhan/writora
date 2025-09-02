import React from "react";
import Animations from "../components/Animations";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <Animations delay={0.2}>
      <div className="min-h-screen bg-rose-50 flex items-center justify-center px-6 pt-28 sm:pt-32 pb-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-md p-8">
          
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">Contact Us</h2>
            <p className="text-gray-500 font-medium">
              Any questions or remarks?<br />
              Just write us a message!
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700">Sydney</h4>
                <p className="text-gray-600 text-sm">
                  45 Pirrama Rd, Pyrmont NSW 2022
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Melbourne</h4>
                <p className="text-gray-600 text-sm">
                  163 Collins St, Melbourne VIC 3000
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Los Angeles</h4>
                <p className="text-gray-600 text-sm">
                  340 Main St, Venice CA 902291, USA
                </p>
              </div>
            </div>
          </div>

          {/* Right Side   Form */}
          <div className="bg-pink-600 rounded-2xl p-8 shadow-inner">
            <h3 className="text-3xl font-medium text-white mb-6">Get in Touch!</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-white">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-pink-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-pink-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-pink-200"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <Link to="./login">
              <button
                type="submit"
                className="bg-rose-100 hover:bg-pink-200 text-pink-600 font-semibold py-2 px-6 rounded-md mt-2 transition-all"
              >
                Submit
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Animations>
  );
};

export default Contact;







