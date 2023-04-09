import { HelpSidebar } from "@/components/HelpSidebar";
import { MDXStyles } from "@/components/MDXStyles";
import { allArticles } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => allArticles.map(article => ({ slug: article._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
	const article = allArticles.find((article: any) => article._raw.flattenedPath === "");
	return { title: article?.title };
};

const HelpPage = () => {
	const article = allArticles.find(articles => articles._raw.flattenedPath === "");

	let MDXContent;

	if (!article) {
		return <div>404</div>;
	} else {
		MDXContent = getMDXComponent(article!.body.code);
	}

	return (
		<>
			<div className="h-full flex">
				<div className="hidden fixed sm:block h-full">
					<HelpSidebar />
				</div>
				<div className="sm:pl-72">
					<div className="px-10 py-9 max-w-4xl">
						<h1 className="font-semibold text-3xl">{article.title}</h1>
						<div className="mt-4">
							<article>
								<MDXStyles>
									<MDXContent />
								</MDXStyles>
							</article>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HelpPage;
