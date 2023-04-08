import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Article = defineDocumentType(() => ({
	name: "Article",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		description: {
			type: "string",
			description: "The description of the post",
			required: true,
		},
		category: {
			type: "string",
			description: "The category of the post",
			required: true,
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: doc => `/help/${doc._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "help",
	documentTypes: [Article],
});
