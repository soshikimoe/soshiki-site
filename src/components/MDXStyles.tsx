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
				"prose-h1:text-lg prose-h1:font-medium",
				"prose-a:text-[#b21677]"
			)}
		>
			{children}
		</section>
	);
}
