import { allArticles } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => allArticles.map(article => ({ slug: article._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
	const article = allArticles.find((article: any) => article._raw.flattenedPath === params.slug);
	return { title: article?.title, description: article?.description };
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
		<div>
			<h1>{article.title}</h1>
			<p>{article.description}</p>
			<article>
				<MDXContent />
			</article>
		</div>
	);
};

export default ArticleLayout;
