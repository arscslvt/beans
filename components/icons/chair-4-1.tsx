import React from 'react';
import IconProps from "@/types/icon.types"

function Chair41(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.8819 7.61645L15.204 7.011C15.332 6.649 15.35 6.255 15.246 5.885C14 1.417 13.686 0.764999 8.99999 0.764999C4.31399 0.764999 3.99999 1.417 2.75299 5.885C2.64999 6.255 2.66799 6.649 2.79499 7.011L3.04349 7.67325C3.16162 7.57579 3.28494 7.48524 3.41218 7.40208C4.35649 6.78491 5.57988 6.5 7 6.5H11C12.424 6.5 13.6475 6.78848 14.5907 7.40693C14.6903 7.47225 14.7876 7.54217 14.8819 7.61645Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M9 11.25V17.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 15L5.75 16.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 15L12.25 16.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.054 7.436L15.204 7.011C15.332 6.649 15.35 6.255 15.246 5.885C14 1.417 13.686 0.764999 8.99999 0.764999C4.31399 0.764999 3.99999 1.417 2.75299 5.885C2.64999 6.255 2.66799 6.649 2.79499 7.011L2.94499 7.436" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 11.25H13C13.552 11.25 14 10.814 14 10.25C14 9.686 13.285 8.75 11 8.75H9C8.398 8.75 7.715 8.75 7 8.75C4.715 8.75 4 9.678 4 10.25C4 10.814 4.448 11.25 5 11.25H9Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Chair41;