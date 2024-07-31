import React from 'react';
import IconProps from "@/types/icon.types"

function ProgressBar1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25 8.75H3.75C2.09315 8.75 0.75 10.0931 0.75 11.75C0.75 13.4069 2.09315 14.75 3.75 14.75H14.25C15.9069 14.75 17.25 13.4069 17.25 11.75C17.25 10.0931 15.9069 8.75 14.25 8.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9.40401 5.052L11.161 2.522C11.387 2.196 11.154 1.75 10.757 1.75H7.24401C6.84701 1.75 6.61401 2.196 6.84001 2.522L8.59701 5.052C8.79301 5.334 9.20801 5.334 9.40401 5.052Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.75 11.75H9" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 8.75H3.75C2.09315 8.75 0.75 10.0931 0.75 11.75C0.75 13.4069 2.09315 14.75 3.75 14.75H14.25C15.9069 14.75 17.25 13.4069 17.25 11.75C17.25 10.0931 15.9069 8.75 14.25 8.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.40401 5.052L11.161 2.522C11.387 2.196 11.154 1.75 10.757 1.75H7.24401C6.84701 1.75 6.61401 2.196 6.84001 2.522L8.59701 5.052C8.79301 5.334 9.20801 5.334 9.40401 5.052Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ProgressBar1;