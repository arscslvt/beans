import React from 'react';
import IconProps from "@/types/icon.types"

function Flag71(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.75 3.25H11.25C11.802 3.25 12.25 3.698 12.25 4.25V9.25H3.75" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.75 3.25H11.25C11.802 3.25 12.25 3.698 12.25 4.25V9.25H3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 5.75H14.25C14.802 5.75 15.25 6.198 15.25 6.75V10.75C15.25 11.302 14.802 11.75 14.25 11.75H10.75C10.198 11.75 9.75 11.302 9.75 10.75V9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.043 11.457L12.25 9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 1.75V16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Flag71;