import React from 'react';
import IconProps from "@/types/icon.types"

function GlobePointer1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10.1723 16.0562C9.63546 16.1829 9.07556 16.25 8.5 16.25C4.49594 16.25 1.25 13.0041 1.25 9C1.25 4.99594 4.49594 1.75 8.5 1.75C12.5041 1.75 15.75 4.99594 15.75 9C15.75 9.3514 15.725 9.69697 15.6767 10.035L11.8981 8.65461L11.8981 8.65459L11.8911 8.65208C9.88761 7.9276 7.90852 9.86569 8.65417 11.9006L8.65525 11.9035L10.1723 16.0562Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M9.926 16.11C9.465 16.202 8.988 16.25 8.5 16.25C4.496 16.25 1.25 13.004 1.25 9C1.25 4.996 4.496 1.75 8.5 1.75C12.504 1.75 15.75 4.996 15.75 9C15.75 9.264 15.736 9.524 15.709 9.78" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75 9C15.75 7.343 12.504 6 8.5 6C4.496 6 1.25 7.343 1.25 9C1.25 10.646 4.455 11.983 8.425 12" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.486 8.293C11.339 4.621 10.058 1.75 8.5 1.75C6.843 1.75 5.5 4.996 5.5 9C5.5 13.004 6.843 16.25 8.5 16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default GlobePointer1;