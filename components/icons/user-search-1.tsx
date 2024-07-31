import React from 'react';
import IconProps from "@/types/icon.types"

function UserSearch1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13 15.25C14.2426 15.25 15.25 14.2426 15.25 13C15.25 11.7574 14.2426 10.75 13 10.75C11.7574 10.75 10.75 11.7574 10.75 13C10.75 14.2426 11.7574 15.25 13 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.52199 9.789C9.34799 9.774 9.17699 9.75 8.99999 9.75C6.44899 9.75 4.26099 11.28 3.29099 13.47C2.92599 14.295 3.37799 15.244 4.23799 15.515C5.46299 15.901 7.08399 16.249 8.99999 16.249C9.18599 16.249 9.35499 16.232 9.53499 16.226" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.59 14.59L16.25 16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default UserSearch1;