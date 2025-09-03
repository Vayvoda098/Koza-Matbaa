'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Cont({ open, onClose, product }) {
  if (!product) {
    return null; // Don't render the dialog if no product is selected
  }
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:rounded-lg md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full flex-col overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="flex-grow overflow-y-auto pr-4"> {/* Added flex-grow and overflow-y-auto */}
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover sm:aspect-2/3 sm:col-span-4 lg:col-span-5"
                  />
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>
                      <p className="text-2xl text-gray-900">{product.price || 'Fiyat için iletişime geçin'}</p>
                      <div className="mt-6">
                        <h4 className="sr-only">Description</h4>
                        <p className="text-base text-gray-700">{product.description}</p>
                      </div>
                      {product.details && product.details.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900">Ürün Detayları</h4>
                          <ul className="mt-4 space-y-2 text-gray-700">
                            {product.details.map((detail, index) => (
                              <li key={index} className="flex items-center">
                                <StarIcon className="size-5 shrink-0 text-indigo-600 mr-2" aria-hidden="true" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex-shrink-0"> {/* Moved WhatsApp button outside scrollable content */}
                <a
                  href="https://wa.me/905559887253" // Replace with actual company WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  WhatsApp ile Teklif Al
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
