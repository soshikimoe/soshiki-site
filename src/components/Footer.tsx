import { AiFillHeart } from "react-icons/ai";

export const Footer = (props: any) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center text-primary p-10 border-t-[1px]">
				<h1 className="font-semibold text-xl">© 2023 JimIsWayTooEpic</h1>
				<p className="mt-2 text-sm">
					Designed and Developed with <AiFillHeart size="20" className="inline" /> by{" "}
					<a
						href="https://github.com/jckli"
						className="text-primary transition-all ease-in-out hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#d9218f] before:absolute before:left-0 before:bottom-0"
					>
						jckli
					</a>
				</p>
			</div>
		</>
	);
};
