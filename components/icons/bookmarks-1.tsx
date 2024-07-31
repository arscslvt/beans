import React from 'react';
import IconProps from "@/types/icon.types"

function Bookmarks1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.25 16.25L7.5 12.75L2.75 16.25V6.75C2.75 5.645 3.645 4.75 4.75 4.75H10.25C11.355 4.75 12.25 5.645 12.25 6.75V16.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M12.25 16.25L7.5 12.75L2.75 16.25V6.75C2.75 5.645 3.645 4.75 4.75 4.75H10.25C11.355 4.75 12.25 5.645 12.25 6.75V16.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.781 2C7.068 1.841 7.398 1.75 7.75 1.75H13.25C14.355 1.75 15.25 2.645 15.25 3.75V13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bookmarks1;