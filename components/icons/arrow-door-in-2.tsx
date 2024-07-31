import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDoorIn2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1=".75" x2="5" y1="6" y2="6"/>
		<polyline fill="none" points="3 3.75 5.25 6 3 8.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m10.77,1.15l-2.16,1.8c-.228.19-.36.471-.36.768v4.563c0,.297.132.578.36.768l2.16,1.8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m4.776,10.009c.123.704.734,1.241,1.474,1.241h3.5c.828,0,1.5-.672,1.5-1.5V2.25c0-.828-.672-1.5-1.5-1.5h-3.5c-.74,0-1.351.537-1.474,1.241" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ArrowDoorIn2;