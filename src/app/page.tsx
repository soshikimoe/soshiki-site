import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="w-full flex flex-col items-center justify-center text-3xl font-semibold text-center bg-[#f9eaf0]">
				<div className="text-primary flex flex-col items-center px-5 py-10">
					<Image alt="soshiki-logo" src="/logo.png" width={150} height={150} />
					<h1 className="text-4xl sm:text-5xl">Soshiki</h1>
					<h2 className="text-xl sm:text-2xl mt-4 font-normal">
						FOSS manga, anime, and light novel all-in-one app
					</h2>
					<div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-6">
						<Button button_link="/discord" button_text="Discord" />
						<Button button_link="/kofi" button_text="Ko-fi" />
						<Button button_link="/help" button_text="User Guide" local={true} />
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col my-10 items-center justify-center">
				<div className="flex flex-col md:flex-row px-10 gap-10 md:gap-6 max-w-6xl">
					<div className="text-center md:w-[33%] flex flex-col items-center px-4">
						<h2 className="font-semibold text-2xl">Cloud Syncing</h2>
						<p className="mt-2">Sync your anime, manga, and light novel lists across all your devices, all by logging in with your Discord account</p>
						<div className="mt-4">
							<Image alt="library-image" src="/features/library.png" width={248.4} height={441.6} />
						</div>
					</div>
					<div className="text-center md:w-[33%] flex flex-col items-center px-4">
						<h2 className="font-semibold text-2xl">Anime, Manga, and Light Novels</h2>
						<p className="mt-2">
							Soshiki supports watching anime as well as reading manga and light novels, with beautiful viewers for each
						</p>
						<div className="mt-4">
							<Image
								alt="anime-player-image"
								src="/features/anime.png"
								width={248.4}
								height={441.6}
							/>
						</div>
					</div>
					<div className="text-center md:w-[33%] flex flex-col items-center px-4">
						<h2 className="font-semibold text-2xl">Extensive Features</h2>
						<p className="mt-2">Supports multiple reading modes for manga, text and paragraph customization for novels, intro skips for anime, and much more</p>
						<div className="mt-4">
							<Image alt="manga-reader-image" src="/features/manga.png" width={248.4} height={441.6} />
						</div>
					</div>
				</div>
				<div className="mt-10 text-center flex flex-col md:flex-row px-10 gap-10 md:gap-6 max-w-6xl">
					<div className="md:w-[33%] flex flex-col items-center">
						<h2 className="font-semibold text-2xl">Automatic Tracking</h2>
						<p className="mt-2">
							Automatically keep track of your anime, manga, and light novels with trackers such as MyAnimeList and AniList
						</p>
					</div>
					<div className="md:w-[33%] flex flex-col items-center">
						<h2 className="font-semibold text-2xl">Content Sources</h2>
						<p className="mt-2">
							An extensive source library and open-source source development toolkit means access to anything you can imagine
						</p>
					</div>
					<div className="md:w-[33%] flex flex-col items-center">
						<h2 className="font-semibold text-2xl">Intro Skip</h2>
						<p className="mt-2">
							Automatically skip intros and outros of anime episodes powered by anime-skip
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
