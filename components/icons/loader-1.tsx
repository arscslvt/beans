import React from 'react';
import IconProps from "@/types/icon.types"

function Loader1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 1.75V4.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.127 3.873L12.359 5.641" fill="none" opacity="0.88" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 9H13.75" fill="none" opacity="0.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.127 14.127L12.359 12.359" fill="none" opacity="0.63" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 16.25V13.75" fill="none" opacity="0.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.87299 14.127L5.64099 12.359" fill="none" opacity="0.38" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 9H4.25" fill="none" opacity="0.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.87299 3.873L5.64099 5.641" fill="none" opacity="0.13" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Loader1;