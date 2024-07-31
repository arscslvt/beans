import React from 'react';
import IconProps from "@/types/icon.types"

function PresentationScreen1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M5.75 16.25L6.75 13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 16.25L11.25 13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 2.75V1.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PresentationScreen1;