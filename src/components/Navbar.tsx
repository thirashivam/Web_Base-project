import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import classNames from 'classnames';
import logo from '../images/logo.png'

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const Navbar: React.FC = () => {


  const mainNavigation: NavigationItem[] = [
    { name: 'Select Language', href: '/', current: false },
    { name: 'Login', href: '/', current: false },
  ];

  return (
    <>
      <Disclosure as="nav" className=" bg-[#042FA2] ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-12xl px-2 sm:px-6 lg:px-10 py-2 ">
              <div className="relative flex h-10 justify-between">
                <div className="inset-y-0 left-0 flex sm:hidden md-hidden">
                  <Disclosure.Button className="relative inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className=" -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1  sm:items-center items-center sm:justify-between">
                  <div className="flex  flex-shrink-0 items-center">
                    <img className="h-5 w-25" src={logo} alt="Logo" />
                  </div>

                  <div className="hidden md:hidden lg:block justify-between px-3 py-0">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search Location"
                        className="px-3 py-2 pl-8 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full h-10"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                    </div>
                  </div>


                  <div className="hidden sm:flex flex-auto space-x-2 justify-between px-3 py-0">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search Clothes Car roperty............"
                        className="pl-10 pr-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full h-10"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 h-10 ml-2">Search</button>
                  </div>

                  <div className="hidden  sm:block">
                    <div className="flex space-x-6">
                      {mainNavigation.map((item) => (
                        <div key={item.name} className="relative group">
                          <a
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-sky-500 text-white' : 'text-white  hover:text-lime-400',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                          {['Select Language'].includes(item.name) && (
                            <div className="absolute left-0  z-10 hidden group-hover:block bg-white shadow-md rounded-md mt-1 py-1">
                              {item.name === 'Select Language' && (
                                <>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Hindi</a>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">English</a>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:hidden lg:block items-center">
                    <button className="relative inline-flex items-center justify-center px-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lime-600 rounded-full shadow-md group sm:w-auto md:w-auto lg:w-auto">
                      <span className="absolute inset-0 flex items-center justify-center text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">SELL</span>
                      <span className="relative invisible">SELL Text</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 absolute z-2 bg-white">
                {mainNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}

              </div>
            </Disclosure.Panel>

          </>
        )}
      </Disclosure>
    </>
  )
}

export default Navbar;