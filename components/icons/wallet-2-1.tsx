import React from 'react';
import IconProps from "@/types/icon.types"

function Wallet21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.75 13.25V11.25H13C12.034 11.25 11.25 10.466 11.25 9.5C11.25 8.533 12.034 7.75 13 7.75H15.75V5.75C15.75 4.645 14.855 3.75 13.75 3.75H4.25C3.145 3.75 2.25 4.645 2.25 5.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H13.75C14.855 15.25 15.75 14.355 15.75 13.25Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M2.25 5.49998C2.25 3.76698 3.499 2.28698 5.207 1.99498L11.769 0.874982C12.203 0.800982 12.635 1.01998 12.832 1.41398L12.885 1.51998" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75 11.25V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V5.75C2.25 4.645 3.145 3.75 4.25 3.75H13.75C14.855 3.75 15.75 4.645 15.75 5.75V7.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75 11.25H13C12.034 11.25 11.25 10.466 11.25 9.5C11.25 8.533 12.034 7.75 13 7.75H15.75C16.302 7.75 16.75 8.198 16.75 8.75V10.25C16.75 10.802 16.302 11.25 15.75 11.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Wallet21;