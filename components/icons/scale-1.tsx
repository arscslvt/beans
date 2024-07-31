import React from 'react';
import IconProps from "@/types/icon.types"

function Scale1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M0.775 9.25C0.767 9.333 0.75 9.414 0.75 9.5C0.75 11.019 1.981 12.25 3.5 12.25C5.019 12.25 6.25 11.019 6.25 9.5C6.25 9.414 6.232 9.333 6.225 9.25H0.775Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M17.225 9.25C17.233 9.333 17.25 9.414 17.25 9.5C17.25 11.019 16.019 12.25 14.5 12.25C12.981 12.25 11.75 11.019 11.75 9.5C11.75 9.414 11.768 9.333 11.775 9.25H17.225Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 5.5C9.9665 5.5 10.75 4.7165 10.75 3.75C10.75 2.7835 9.9665 2 9 2C8.0335 2 7.25 2.7835 7.25 3.75C7.25 4.7165 8.0335 5.5 9 5.5Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.25002 3.75H3.52502" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 3.75H14.475" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M0.775 9.25C0.767 9.333 0.75 9.414 0.75 9.5C0.75 11.019 1.981 12.25 3.5 12.25C5.019 12.25 6.25 11.019 6.25 9.5C6.25 9.414 6.232 9.333 6.225 9.25H0.775Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.225 9.25C17.233 9.333 17.25 9.414 17.25 9.5C17.25 11.019 16.019 12.25 14.5 12.25C12.981 12.25 11.75 11.019 11.75 9.5C11.75 9.414 11.768 9.333 11.775 9.25H17.225Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.22502 9.25L3.52502 3.75L0.775024 9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.775 9.25L14.475 3.75L17.225 9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 5.5C9.9665 5.5 10.75 4.7165 10.75 3.75C10.75 2.7835 9.9665 2 9 2C8.0335 2 7.25 2.7835 7.25 3.75C7.25 4.7165 8.0335 5.5 9 5.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 5.5V15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 15.75H4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Scale1;