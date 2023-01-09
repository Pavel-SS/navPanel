import React from 'react'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'API', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export const ProfileHeader = () => {
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto xl:ml-4 sm:ml-2 sm:pr-0 right-7">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-green-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://s3-alpha-sig.figma.com/img/7e83/009e/ec05ccfbcf11af4cca0861741abe94a5?Expires=1674432000&Signature=TyWAa20o6bybMy5LHdFT0e5RUotLxYu5m2m~0gitPTYE2htagYUYNsP19EX0qOFYTim0w7JLDTwi6zPab4PQmIyT4bMbKKYoDYne31QDrLpwKN598NJwbpFqxo4ZZsrA5UzKdg9PGfNIZ-~JvsuoICfoQtcv9RgvrWFsHggF~oDjkLJfdUDyrBcKjKOH9K2yxBxLAElXOaJJk70ptGENcoqFvq5H9mgdmmFcQx71LooqS1-ECb-o4plXk1SnxtF0nXnwMOvkvTuAdN0g70T5u7N6-7nNUSMuF7FXWcYaw5oGUUwf3NkPLULEtNjqWwIpSQHO~AtdAJOhJFcqHOAtxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-grey-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black-500')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black-500')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black-500')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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