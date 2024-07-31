import React from 'react';
import IconProps from "@/types/icon.types"

function Phone1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.347 10.646L10.206 12.072C8.43903 11.033 6.96603 9.56099 5.92803 7.79399L7.35403 6.65299C7.69803 6.37799 7.81303 5.90499 7.63403 5.50299L6.33403 2.57599C6.14103 2.14199 5.66303 1.91199 5.20403 2.03099L2.72903 2.67299C2.25103 2.79799 1.94203 3.26099 2.01003 3.74999C2.90203 10.104 7.89603 15.098 14.251 15.991C14.74 16.058 15.203 15.749 15.327 15.272L15.969 12.797C16.088 12.338 15.858 11.861 15.425 11.668L12.498 10.368C12.096 10.189 11.624 10.304 11.348 10.647L11.347 10.646Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M11.347 10.646L10.206 12.072C8.43903 11.033 6.96603 9.56099 5.92803 7.79399L7.35403 6.65299C7.69803 6.37799 7.81303 5.90499 7.63403 5.50299L6.33403 2.57599C6.14103 2.14199 5.66303 1.91199 5.20403 2.03099L2.72903 2.67299C2.25103 2.79799 1.94203 3.26099 2.01003 3.74999C2.90203 10.104 7.89603 15.098 14.251 15.991C14.74 16.058 15.203 15.749 15.327 15.272L15.969 12.797C16.088 12.338 15.858 11.861 15.425 11.668L12.498 10.368C12.096 10.189 11.624 10.304 11.348 10.647L11.347 10.646Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Phone1;