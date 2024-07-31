import React from 'react';
import IconProps from "@/types/icon.types"

function Bell1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.75 13.25C14.645 13.25 13.75 12.355 13.75 11.25V6.5C13.75 3.877 11.623 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V11.25C4.25 12.355 3.355 13.25 2.25 13.25H15.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M15.75 13.25C14.645 13.25 13.75 12.355 13.75 11.25V6.5C13.75 3.877 11.623 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V11.25C4.25 12.355 3.355 13.25 2.25 13.25H15.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.588 15.185C10.493 15.068 10.351 15 10.2 15H7.801C7.65 15 7.508 15.068 7.413 15.185C7.318 15.302 7.281 15.456 7.312 15.603C7.485 16.425 8.18 17 9.001 17C9.822 17 10.517 16.425 10.69 15.603C10.721 15.456 10.683 15.302 10.588 15.185Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Bell1;