import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

const Article = defineDocumentType(() => ({
    name: "Article",
    filePathPattern: "help/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        seoDescription: { type: "string", required: true },
        category: { type: "string", required: true },
    },
    computedField: {
        slug: {
            type: 'string',
            resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
          },
    },
}));

const contentLayerConfig = makeSource({
    contentDirPath: "src",
    documentTypes: [Article],
});

export default contentLayerConfig;