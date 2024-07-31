import React from 'react';
import IconProps from "@/types/icon.types"

function Pen31(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.0606 7.97042L10.0306 4.94042L4.266 10.705C3.32897 11.642 2.763 15.1755 2.75119 15.2498C2.7504 15.2499 2.75 15.25 2.75 15.25L2.751 15.251C2.751 15.251 2.75106 15.2506 2.75119 15.2498C2.82546 15.238 6.35897 14.672 7.296 13.735L13.0606 7.97042Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M10 5L13.586 8.586C14.367 9.367 14.367 10.633 13.586 11.414L12 13" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 15.25C2.75 15.25 6.349 14.682 7.296 13.735C8.243 12.788 14.623 6.408 14.623 6.408C15.46 5.571 15.46 4.214 14.623 3.378C13.786 2.541 12.429 2.541 11.593 3.378C11.593 3.378 5.213 9.758 4.266 10.705C3.319 11.652 2.751 15.251 2.751 15.251L2.75 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Pen31;