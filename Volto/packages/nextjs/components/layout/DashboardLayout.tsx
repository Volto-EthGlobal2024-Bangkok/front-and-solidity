"use client";

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import {
  Bars3Icon,
  ChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface Wallet {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}

interface DashboardLayoutProps {
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation: SidebarLink[] = [
    { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
    { name: "Wallets", href: "/wallets", icon: WalletIcon, current: false },
    { name: "Analytics", href: "/analytics", icon: ChartBarIcon, current: false },
    { name: "Documents", href: "/documents", icon: DocumentTextIcon, current: false },
  ];

  const wallets: Wallet[] = [
    { id: 1, name: "Main Wallet", href: "#", initial: "M", current: true },
    { id: 2, name: "Development Wallet", href: "#", initial: "D", current: false },
    { id: 3, name: "Test Wallet", href: "#", initial: "T", current: false },
  ];

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
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Volto</span>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map(item => (
                        <li key={item.name} className="w-full">
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-primary text-primary"
                                : "text-neutral hover:bg-primary hover:text-primary",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current ? "text-primary" : "text-primary/60 group-hover:text-primary",
                                "size-6 shrink-0",
                              )}
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {wallets.length > 0 && (
                    <li>
                      <div className="text-xs/6 font-semibold text-neutral-content">Your wallets</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {wallets.map(wallet => (
                          <li key={wallet.name}>
                            <a
                              href={wallet.href}
                              className={classNames(
                                wallet.current
                                  ? "bg-base-200 text-primary"
                                  : "text-neutral hover:bg-base-200 hover:text-primary",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                              )}
                            >
                              <span
                                className={classNames(
                                  wallet.current
                                    ? "border-primary text-primary/90"
                                    : "border-primary text-primary/60 group-hover:border-primary group-hover:text-primary/90",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-base-100 text-[0.625rem] font-medium",
                                )}
                              >
                                {wallet.initial}
                              </span>
                              <span className="truncate">{wallet.name}</span>
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
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold mt-1">Volto</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-base-200 text-primary"
                            : "text-neutral hover:bg-base-200 hover:text-primary",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current ? "text-primary" : "text-primary/60 group-hover:text-primary",
                            "size-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {wallets.length > 0 && (
                <li>
                  <div className="text-xs/6 font-semibold text-neutral-content">Your wallets</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {wallets.map(wallet => (
                      <li key={wallet.name}>
                        <a
                          href={wallet.href}
                          className={classNames(
                            wallet.current
                              ? "bg-base-200 text-primary"
                              : "text-neutral hover:bg-base-200 hover:text-primary",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                          )}
                        >
                          <span
                            className={classNames(
                              wallet.current
                                ? "border-primary text-primary/90"
                                : "border-base-300 text-neutral-content/90 group-hover:border-primary group-hover:text-primary/90",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-base-100 text-[0.625rem] font-medium",
                            )}
                          >
                            {wallet.initial}
                          </span>
                          <span className="truncate">{wallet.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-neutral hover:bg-base-200"
                >
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-base-200"
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-base-100 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-neutral lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6 opacity-90" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-neutral">Dashboard</div>
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