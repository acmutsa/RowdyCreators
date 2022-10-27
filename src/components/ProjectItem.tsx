import type { FunctionComponent, ReactNode } from "react";

interface ProjectItemProps {
	title: string;
	description: string;
	children: ReactNode;
}

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({
	title,
	children,
	description,
}) => {
	return (
		<div className="h-[325px] w-full rounded-xl border-2 border-rc-darkblue p-[2px]">
			<div className="flex h-[60%] items-center justify-center">{children}</div>
			<div className="flex h-[40%] flex-col justify-center">
				<h1 className="text-4xl font-bold text-rc-darkblue">{title}</h1>
				<p className="text-lg font-semibold text-rc-darkblue">{description}</p>
			</div>
		</div>
	);
};
