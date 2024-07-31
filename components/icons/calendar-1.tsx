import React from 'react';
import IconProps from "@/types/icon.types"

function Calendar1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M2.25 4.75C2.25 3.64543 3.14543 2.75 4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V6.25H2.25V4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M5.75 2.75V0.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 2.75V0.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75 2.75H4.25C3.14543 2.75 2.25 3.64543 2.25 4.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V4.75C15.75 3.64543 14.8546 2.75 13.75 2.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.25 6.25H15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Calendar1;