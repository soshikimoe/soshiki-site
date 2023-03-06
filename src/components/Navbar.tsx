"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Transition } from "@headlessui/react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Discord", href: "/discord", external: true },
];

export const Navbar = (props: any) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex sm:justify-between px-3 sm:px-10 py-2">
				<div className="block sm:hidden">
					<Hamburger toggled={open} toggle={setOpen} size={24} />
				</div>
				<div className="ml-4 sm:ml-0">
					<Link href="/" className="flex items-center">
						<Image alt="soshiki-logo" src="/logo.png" width={50} height={50} />
						<h1 className="ml-2 font-semibold text-2xl">Soshiki</h1>
					</Link>
				</div>
				<div className="hidden sm:flex items-center gap-5">
					{navigation.map(item => (
						<>
							{item.external ? (
								<a
									key={item.name}
									href={item.href}
									className="text-lg font-medium hover:text-primary transition-all ease-in-out hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#d9218f] before:absolute before:left-0 before:bottom-0"
								>
									{item.name}
								</a>
							) : (
								<Link
									key={item.name}
									href={item.href}
									className="text-lg font-medium hover:text-primary transition-all ease-in-out hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#d9218f] before:absolute before:left-0 before:bottom-0"
								>
									{item.name}
								</Link>
							)}
						</>
					))}
				</div>
			</div>
			<Sidebar open={open} />
		</>
	);
};

const Sidebar = ({ open }: any) => {
	return (
		<>
			<div className="sm:hidden fixed h-full ">
				<Transition
					show={open}
					enter="transform transition ease-in-out duration-300"
					enterFrom="-translate-x-full h-full"
					enterTo="translate-x-0 h-full"
					leave="transform transition ease-in-out duration-300"
					leaveFrom="translate-x-0 h-full"
					leaveTo="-translate-x-full h-full"
				>
					{ref => (
						<div ref={ref} className="w-64 bg-white border-r-2 h-full">
							<div className="px-4 py-4 h-full flex flex-col">
								{navigation.map(item => (
									<>
										{item.external ? (
											<a
												key={item.name}
												href={item.href}
												className="text-lg font-medium hover:bg-gray-200/80 rounded-md ease-in-out duration-200 px-3 py-2"
											>
												{item.name}
											</a>
										) : (
											<Link
												key={item.name}
												href={item.href}
												className="text-lg font-medium hover:bg-gray-200/80 rounded-md ease-in-out duration-200 px-3 py-2"
											>
												{item.name}
											</Link>
										)}
									</>
								))}
							</div>
						</div>
					)}
				</Transition>
			</div>
		</>
	);
};
