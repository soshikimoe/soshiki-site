type MDXStylesProps = {
	children: React.ReactNode;
};

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export function MDXStyles({ children }: MDXStylesProps) {
	return (
		<section
			className={classNames(
				"text-primary relative",
				"prose-h1:text-2xl prose-h1:font-medium prose-h1:mb-2",
				"prose-h2:text-xl prose-h2:font-medium prose-h2:mb-2",
				"prose-h3:text-lg prose-h3:font-medium",
				"prose-a:text-[#b21677]"
			)}
		>
			{children}
		</section>
	);
}
