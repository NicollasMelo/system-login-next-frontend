import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-400 py-10'>
      <div className='container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div>
          <h2 className='text-white text-lg font-bold mb-4'>Support</h2>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-white'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Documentation
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Guides
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                API Status
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-white text-lg font-bold mb-4'>Company</h2>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-white'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Jobs
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Press
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-white text-lg font-bold mb-4'>Legal</h2>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-white'>
                Claim
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Privacy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-white text-lg font-bold mb-4'>
            Coloque seu email abaixo para receber sua i
          </h2>
          <p className='text-gray-400 mb-4'>
            Receba uma mensagem no seu email!
          </p>
          <form className='flex'>
            <input
              type='email'
              placeholder='Coloque seu Email'
              className='px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 '
            />
            <button
              type='submit'
              className='px-4 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className='border-t border-gray-800 mt-10 pt-6 text-center'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a href='#' className='text-gray-400 hover:text-teal-500'>
            <FontAwesomeIcon icon={faFacebookF} className='h-6 w-6' />
          </a>
          <a href='#' className='text-gray-400 hover:text-teal-500'>
            <FontAwesomeIcon icon={faInstagram} className='h-6 w-6' />
          </a>
          <a href='#' className='text-gray-400 hover:text-teal-500'>
            <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
          </a>
          <a href='#' className='text-gray-400 hover:text-teal-500'>
            <FontAwesomeIcon icon={faYoutube} className='h-6 w-6' />
          </a>
        </div>
        <p className='text-gray-500'>
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
