import React from 'react';
import IconProps from "@/types/icon.types"

function Refresh21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9" cy="9" fill={secondaryfill} fillOpacity="0.3" r="6.25"/>
		<path d="M8.5 12.75L10.75 15L8.5 17.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.952 4.23801C3.605 5.38401 2.75 7.09301 2.75 9.00001C2.75 12.452 5.548 15.25 9 15.25C9.579 15.25 10.14 15.171 10.672 15.024" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.5 5.25L7.25 3L9.5 0.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.048 13.762C14.395 12.616 15.25 10.907 15.25 9C15.25 5.548 12.452 2.75 9.00002 2.75C8.40302 2.75 7.82502 2.834 7.27802 2.99" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Refresh21;