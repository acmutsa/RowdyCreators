import type { FunctionComponent } from "react";

export const AnimatedLogo: FunctionComponent = () => {
	return (
		<>
			<svg
				width={300}
				height={500}
				viewBox="0 0 500 500"
				preserveAspectRatio="xMidYMid slice"
				className="margin-0"
			>
				<image href="/img/animated-logo/stem.svg" width="500" height="500" />
				<image
					transform="translate(0 -40)"
					href="/img/animated-logo/gear.svg"
					width="500"
					height="500"
				>
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						from="0 250 250"
						to="360 250 250"
						dur="10s"
						repeatCount="indefinite"
						additive="sum"
					/>
				</image>
				<image
					className="svg-shadow"
					href="/img/animated-logo/light.svg"
					width="500"
					height="500"
				/>
			</svg>
		</>
	);
};
