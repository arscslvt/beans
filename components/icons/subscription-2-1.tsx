import React from 'react';
import IconProps from "@/types/icon.types"

function Subscription21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9" cy="9" fill={secondaryfill} fillOpacity="0.3" r="7.25"/>
		<path d="M1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.031 1.75 14.627 3.61 15.71 6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.12 3.30499L15.712 6.24999L12.768 5.84299" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 9C16.25 13.004 13.004 16.25 9.00001 16.25C5.96901 16.25 3.37301 14.39 2.29001 11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.88 14.695L2.288 11.75L5.232 12.157" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.817 6.894C10.423 5.961 9.634 5.75 9.038 5.75C8.484 5.75 7.028 6.045 7.163 7.442C7.257 8.423 8.182 8.788 8.99 8.932C9.798 9.076 10.971 9.384 11 10.567C11.024 11.567 10.125 12.25 9.038 12.25C8 12.25 7.278 11.846 7 10.933" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 4.99103V5.63603" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 12.25V12.894" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Subscription21;