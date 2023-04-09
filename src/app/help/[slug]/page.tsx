import { HelpSidebar } from "@/components/HelpSidebar";
import { allArticles } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => allArticles.map(article => ({ slug: article._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
	const article = allArticles.find((article: any) => article._raw.flattenedPath === params.slug);
	return { title: article?.title };
};

const ArticleLayout = ({ params }: { params: { slug: string } }) => {
	const article = allArticles.find(articles => articles._raw.flattenedPath === params.slug);

	let MDXContent;

	if (!article) {
		return <div>404</div>;
	} else {
		MDXContent = getMDXComponent(article!.body.code);
	}

	return (
		<>
			<div className="h-full flex">
				<HelpSidebar />
				<div className="pl-72">
					<div className="px-10 py-9 max-w-4xl">
						<h1 className="font-semibold text-3xl">{article.title}</h1>
						<article>
							<MDXContent />
						</article>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleLayout;
