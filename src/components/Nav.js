import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, Link } from 'react-router-dom';
import kozaLogo from "../img/kozaLogo.png"
const navigation = [
  { name: 'Anasayfa', href: '/', current: false },
  { name: 'Ürünler', href: '/products', current: false },
  { name: 'Hakkımızda', href: '/about', current: false },
  { name: 'İletişim', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function NavComponent() {
  const location = useLocation();

  return (
    <div>
      <Disclosure
        as="nav"
        className="relative bg-white shadow-lg border-b border-gray-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 focus:outline-2 focus:-outline-offset-1 focus:outline-orange-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/" className="flex items-center space-x-3">
                  <img
                    alt="Koza Matbaa"
                    src={kozaLogo}
                    className="h-12 w-auto"
                  />
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-gray-900">Koza Matbaa</h1>
                    <p className="text-xs text-gray-500">Kaliteli Baskı Hizmetleri</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      location.pathname === item.href || (item.href === '/' && location.pathname === '/')
                        ? 'text-orange-600 border-b-2 border-orange-600'
                        : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-300',
                      'px-3 py-2 text-sm font-semibold transition-all duration-300 border-b-2 border-transparent',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
              <a
                href="https://wa.me/905559887253"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-50">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                className={classNames(
                  location.pathname === item.href || (item.href === '/' && location.pathname === '/')
                    ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-600'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600',
                  'block rounded-md px-3 py-2 text-base font-medium transition-all duration-300',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="https://wa.me/905559887253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default NavComponent;
