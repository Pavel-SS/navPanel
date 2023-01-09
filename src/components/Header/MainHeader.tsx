import React from 'react'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'API', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
  { name: 'Sign Up', href: '#', current: false },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainHeader = () => {
  return (
    <Disclosure as="nav" className="bg-bg_white">
      {({ open }) => (
        <>
          <div className="m-auto max-w-full px-2 sm:px-12 lg:px-28">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex 
                items-center 
                justify-center 
                text-txt_blue-500
                hover:text-black-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-col flex-shrink-0 space-x-1 items-baseline sm:flex-row">
                  <a href="#" className="text-2xl text-black-500">
                    Stochy
                  </a>
                  <span className='text-base text-txt_blue-500'>
                  forecasting app for your assets
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex xl:space-x-4 sm:space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-black-500' : 'text-black-500 hover:text-txt_blue-500',
                          'px-2 py-2 text-base font-medium sm:px-1'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-black-500' : 'text-black-500 hover:text-txt_blue-500',
                    'block px-3 py-2 rounded-md text-base font-medium'
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
  )
}