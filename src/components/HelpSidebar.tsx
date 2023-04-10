import { allArticles } from "contentlayer/generated";
import Link from "next/link";

export const HelpSidebar = ({ params }: any) => {
	const aArticles = allArticles.map(article => ({
		name: article.title,
		url: article.url,
		category: article.category,
	}));
	const individualArticles: Object[] = [];
	const remainingArticles = aArticles.filter(obj => {
		if (obj.name === obj.category) {
			individualArticles.push(obj);
			return false;
		}
		return true;
	});
	const articlesByCategory = groupBy(remainingArticles, "category");
	delete articlesByCategory["Index"];
	return (
		<>
			<div className="sm:w-72 bg-white sm:border-r-2 h-full">
				<div className="pl-2 sm:px-4 py-4 h-full flex flex-col text-primary gap-4">
					<div className="flex flex-col gap-1">
						{individualArticles.map((article: any) => (
							<div key={article.name}>
								<Link
									href={article.url}
									className="text-base hover:bg-gray-200/80 w-full inline-block rounded-md ease-in-out duration-200 px-2 py-1"
								>
									{article.name}
								</Link>
							</div>
						))}
					</div>
					{Object.keys(articlesByCategory).map((key, index) => (
						<div key={key}>
							<h1 className="text-lg font-medium">{key}</h1>
							<div className="mt-1">
								{articlesByCategory[key].map((article: any) => (
									<div key={article.name}>
										<Link
											href={article.url}
											className="text-base hover:bg-gray-200/80 w-full inline-block rounded-md ease-in-out duration-200 px-2 py-1"
										>
											{article.name}
										</Link>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

function groupBy(arr: any, property: any) {
	return arr.reduce(function(memo: any, x: any) {
		if (!memo[x[property]]) {
			memo[x[property]] = [];
		}
		memo[x[property]].push(x);
		return memo;
	}, {});
}
