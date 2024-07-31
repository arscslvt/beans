import React from 'react';
import IconProps from "@/types/icon.types"

function Leaf1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.38332 9.45082C3.7218 12.0693 5.32799 13.8368 6.17989 14.3851C7.14606 14.9941 9.3918 16.1067 12.1263 14.1827C14.4642 12.5377 16.2217 7.44088 13.2397 1.78375C11.5536 5.6491 5.4867 5.08328 4.38332 9.45082Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9.097 15.247C14.724 15.061 16.223 7.137 13.265 1.75C11.556 5.321 7.613 4.784 5.407 7.504C4.753 8.31 4.249 9.405 4.249 10.586C4.249 12.163 5.028 13.558 6.221 14.402" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 16.25C2.75 16.25 7.348 14.985 10.25 9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Leaf1;