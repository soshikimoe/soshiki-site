import { HelpSidebar } from "@/components/HelpSidebar";
import { MDXStyles } from "@/components/MDXStyles";
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
				<div className="hidden fixed sm:block h-full">
					<HelpSidebar />
				</div>
				<div className="sm:pl-72 w-full">
					<div className="px-10 py-9 max-w-4xl mx-auto">
						<h1 className="font-bold text-3xl text-primary">{article.title}</h1>
						<div className="mt-6">
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

export default ArticleLayout;
