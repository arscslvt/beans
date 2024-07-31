import React from 'react';
import IconProps from "@/types/icon.types"

function MagnifierFaceWorried2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="7.75" cy="7.75" fill="none" r="5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="5.5" cy="7.25" fill={secondaryfill} r=".75"/>
		<circle cx="10" cy="7.25" fill={secondaryfill} r=".75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="15.25" x2="11.285" y1="15.25" y2="11.285"/>
		<path d="M7.75,8h0c.828,0,1.5,.672,1.5,1.5h0c0,.276-.224,.5-.5,.5h-2c-.276,0-.5-.224-.5-.5h0c0-.828,.672-1.5,1.5-1.5Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default MagnifierFaceWorried2;