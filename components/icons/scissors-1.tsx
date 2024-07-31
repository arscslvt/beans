import React from 'react';
import IconProps from "@/types/icon.types"

function Scissors1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4 7.75C5.24264 7.75 6.25 6.74264 6.25 5.5C6.25 4.25736 5.24264 3.25 4 3.25C2.75736 3.25 1.75 4.25736 1.75 5.5C1.75 6.74264 2.75736 7.75 4 7.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7 15.5C8.24264 15.5 9.25 14.4926 9.25 13.25C9.25 12.0074 8.24264 11 7 11C5.75736 11 4.75 12.0074 4.75 13.25C4.75 14.4926 5.75736 15.5 7 15.5Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M12.75 7.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4 7.75H9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4 7.75C5.24264 7.75 6.25 6.74264 6.25 5.5C6.25 4.25736 5.24264 3.25 4 3.25C2.75736 3.25 1.75 4.25736 1.75 5.5C1.75 6.74264 2.75736 7.75 4 7.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.409 11.659L14 3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7 15.5C8.24264 15.5 9.25 14.4926 9.25 13.25C9.25 12.0074 8.24264 11 7 11C5.75736 11 4.75 12.0074 4.75 13.25C4.75 14.4926 5.75736 15.5 7 15.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Scissors1;