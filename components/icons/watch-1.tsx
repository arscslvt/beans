import React from 'react';
import IconProps from "@/types/icon.types"

function Watch1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.75 4.75H6.25C5.14543 4.75 4.25 5.64543 4.25 6.75V11.25C4.25 12.3546 5.14543 13.25 6.25 13.25H11.75C12.8546 13.25 13.75 12.3546 13.75 11.25V6.75C13.75 5.64543 12.8546 4.75 11.75 4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M6.25 4.75L6.611 2.586C6.691 2.104 7.109 1.75 7.597 1.75H10.403C10.892 1.75 11.309 2.103 11.389 2.586L11.75 4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25 13.25L6.611 15.414C6.691 15.896 7.109 16.25 7.597 16.25H10.403C10.892 16.25 11.309 15.897 11.389 15.414L11.75 13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 7V9L11 10.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.75 4.75H6.25C5.14543 4.75 4.25 5.64543 4.25 6.75V11.25C4.25 12.3546 5.14543 13.25 6.25 13.25H11.75C12.8546 13.25 13.75 12.3546 13.75 11.25V6.75C13.75 5.64543 12.8546 4.75 11.75 4.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Watch1;