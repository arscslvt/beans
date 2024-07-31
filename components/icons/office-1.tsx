import React from 'react';
import IconProps from "@/types/icon.types"

function Office1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.25 6.25H15.25C15.802 6.25 16.25 6.698 16.25 7.25V15.25C16.25 15.802 15.802 16.25 15.25 16.25H10.25V7.25C10.25 6.698 10.698 6.25 11.25 6.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M2.75 8.75H6.75C7.302 8.75 7.75 9.198 7.75 9.75V16.25H2.75C2.198 16.25 1.75 15.802 1.75 15.25V9.75C1.75 9.198 2.198 8.75 2.75 8.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M11.25 6.25H15.25C15.802 6.25 16.25 6.698 16.25 7.25V15.25C16.25 15.802 15.802 16.25 15.25 16.25H10.25V7.25C10.25 6.698 10.698 6.25 11.25 6.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 8.75H13.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 11.25H13.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 13.75H13.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 8.75H6.75C7.302 8.75 7.75 9.198 7.75 9.75V16.25H2.75C2.198 16.25 1.75 15.802 1.75 15.25V9.75C1.75 9.198 2.198 8.75 2.75 8.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25 11.25H5.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25 13.75H5.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 6.25V4.448C5.25 4.028 5.512 3.654 5.906 3.509L11.406 1.493C12.059 1.254 12.75 1.737 12.75 2.432V3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.75 16.25H10.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Office1;