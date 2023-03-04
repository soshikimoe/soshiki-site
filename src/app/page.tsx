import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="w-full flex flex-col items-center justify-center text-3xl font-semibold text-center">
				<div className="text-primary flex flex-col items-center">
					<Image alt="soshiki-logo" src="/logo.png" width={150} height={150} />
					<h1 className="text-5xl">Soshiki</h1>
					<h2 className="text-2xl mt-5 font-normal">FOSS manga, anime, and light novel all-in-one app</h2>
					<div className="mt-4 flex gap-6">
						<Button button_link="https://github.com/soshikimoe" button_text="Discord" />
						<Button button_link="https://github.com/soshikimoe" button_text="User Guide" />
					</div>
				</div>
			</div>
		</>
	);
}
