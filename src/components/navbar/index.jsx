import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "ABOUT ME", href: "/about", current: false },
  { name: "MY PROJECTS", href: "/mywork", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white font-extrabold">
                  <h1>MikaelaJoelsen.</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block space-x-4 items-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "hover:border-solid-white text-white hover:text-xl"
                          : "text-white hover:text-xl hover:white",
                        "rounded-md px-3 py-2 text-sm font-thin"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex sm:ml-6 items-center space-x-6">
                <FaGithub className="text-white text-2xl hover:text-3xl hover:white" />
                <FaLinkedin className="text-white text-2xl hover:text-3xl hover:white" />
                <FaInstagram className="text-white text-2xl hover:text-3xl hover:white" />
                <FaEnvelope className="text-white text-2xl hover:text-3xl hover:white" />
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden flex flex-col items-center space-y-8 pt-4 pb-2">
            <FaGithub className="text-white  hover:text-2xl hover:white" />
            <FaLinkedin className="text-white  hover:text-2xl hover:white" />
            <FaInstagram className="text-white  hover:text-2xl hover:white" />
            <FaEnvelope className="text-white  hover:text-2xl hover:white" />

            <div className=" space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white hover:text-xl"
                      : "text-white  hover:text-xl",
                    "block rounded-md px-3 py-2 text-base font-bold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
