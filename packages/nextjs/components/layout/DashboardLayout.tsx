"use client";

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import {
  ArrowsRightLeftIcon,
  Bars3Icon,
  CogIcon,
  PaperAirplaneIcon,
  WalletIcon,
  XMarkIcon,
  PauseIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";
import { Logo } from "../Logo";
import { clsx } from "../utils";
import { AccountCard } from "../dashboard/cards/AccountCard";
import dynamic from 'next/dynamic';

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface DashboardLayoutProps {
  children: ReactNode;
}

const IDKitWidgetComponent = dynamic(() => import('../../components/IDKitWidgetComponent'), { ssr: false });

const navigation: SidebarLink[] = [
  { name: "Overview", href: "/assets", icon: WalletIcon, current: false },
  { name: "Settings", href: "/settings/accounts", icon: CogIcon, current: false },
  { name: "Transactions", href: "/on-hold", icon: CubeTransparentIcon, current: false },
  { name: "Transactions On Hold", href: "/on-hold", icon: PauseIcon, current: false },

];



const actions: SidebarLink[] = [
  { name: "Send", href: "/send", icon: PaperAirplaneIcon, current: false },
  { name: "Swap", href: "/swap", icon: ArrowsRightLeftIcon, current: false },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>

      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-neutral/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-base-100/90" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-base-100 px-6 pb-2">
              <div className="flex h-16 shrink-0 items-center gap-x-2">
                <Logo size="sm" />
                <span className="text-xl font-bold">Volto</span>
              </div>
              <AccountCard
                addresses={[
                  "0x1234567890123456789012345678901234567890",
                  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
                ]}
              />
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map(item => (
                        <li key={item.name} className="w-full">
                          <a
                            href={item.href}
                            className={clsx(
                              item.current
                                ? "bg-primary text-primary"
                                : "text-base hover:bg-primary hover:text-primary",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={clsx(
                                item.current ? "text-primary" : "text-primary/80 group-hover:text-primary",
                                "size-6 shrink-0",
                              )}
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {actions.length > 0 && (
                    <li>
                      <div className="text-xs/6 font-semibold text-neutral-content">Actions</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {actions.map(item => (
                          <li key={item.name} className="w-full">
                            <a
                              href={item.href}
                              className={clsx(
                                item.current
                                  ? "bg-primary text-primary"
                                  : "text-base hover:bg-primary hover:text-primary",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={clsx(
                                  item.current ? "text-primary" : "text-primary/80 group-hover:text-primary",
                                  "size-6 shrink-0",
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-base-300 bg-base-100 px-6">
          <div className="flex gap-2 h-16 shrink-0 items-center">
            <Logo size="sm" />
            <span className="text-xl font-bold">Volto</span>
          </div>
          <AccountCard
            addresses={[
              "0x1234567890123456789012345678901234567890",
              "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
              "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
            ]}
          />
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <div className="text-xs/6 font-semibold text-base">Portfolio</div>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={clsx(
                          item.current ? "bg-base-200 text-primary" : "text-base hover:bg-base-200 hover:text-primary",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            item.current ? "text-primary" : "text-primary/80 group-hover:text-primary",
                            "size-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-base">Actions</div>
                <ul role="list" className="-mx-2 space-y-1">
                  {actions.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={clsx(
                          item.current ? "bg-base-200 text-primary" : "text-base hover:bg-base-200 hover:text-primary",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            item.current ? "text-primary" : "text-primary/80 group-hover:text-primary",
                            "size-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
              <div className="text-xs/6 font-semibold text-base">Worldcoin Verification</div>
                <div className="mt-2 flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 gap-x-3">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>

                 <IDKitWidgetComponent />
              </div>
              
      
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-base hover:bg-base-200"
                >
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-base-200"
                  />
                  <div>
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                    <div className="text-xs text-base-content/60">tom@example.com</div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-base-100 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-base lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6 opacity-90" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-base">Dashboard</div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-base-200"
          />
        </a>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}
