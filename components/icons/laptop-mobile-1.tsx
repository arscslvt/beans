import React from 'react';
import IconProps from "@/types/icon.types"

function LaptopMobile1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.25 14.75V9.25C16.25 8.42157 15.5784 7.75 14.75 7.75H12.25C11.4216 7.75 10.75 8.42157 10.75 9.25V14.75C10.75 15.5784 11.4216 16.25 12.25 16.25H14.75C15.5784 16.25 16.25 15.5784 16.25 14.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M16.25 14.75V9.25C16.25 8.42157 15.5784 7.75 14.75 7.75H12.25C11.4216 7.75 10.75 8.42157 10.75 9.25V14.75C10.75 15.5784 11.4216 16.25 12.25 16.25H14.75C15.5784 16.25 16.25 15.5784 16.25 14.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 13H8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 5V4.75C15.25 3.645 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V11.125C2.75 12.161 3.589 13 4.625 13" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default LaptopMobile1;