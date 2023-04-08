import { allArticles } from "contentlayer/generated";
import Link from "next/link";

export const HelpSidebar = ({ params }: any) => {
	const aArticles = allArticles.map(article => ({
		name: article.title,
		url: article.url,
		category: article.category,
	}));
	const articlesByCategory = groupBy(aArticles, "category");
	return (
		<>
			<div className="w-72 bg-white border-r-2 h-full fixed">
				<div className="px-4 py-4 h-full flex flex-col text-primary">
					{Object.keys(articlesByCategory).map((key, index) => (
						<div key={key}>
							<h1 className="text-lg font-medium">{key}</h1>
							{articlesByCategory[key].map((article: any) => (
								<div key={article.name}>
									<Link
										href={article.url}
										className="text-base hover:bg-gray-200/80 rounded-md ease-in-out duration-200 px-2 py-1"
									>
										{article.name}
									</Link>
								</div>
							))}
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
