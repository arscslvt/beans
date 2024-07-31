import React from 'react';
import IconProps from "@/types/icon.types"

function Link1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="7.07332" width="10.1272" fill={secondaryfill} fillOpacity="0.3" rx="3.53666" transform="rotate(45 10.029 5.00841)" x="10.029" y="5.00841"/>
		<path d="M8.5 6.827C8.148 6.995 7.818 7.225 7.527 7.517L7.517 7.527C6.136 8.908 6.136 11.146 7.517 12.527L9.692 14.702C11.073 16.083 13.311 16.083 14.692 14.702L14.702 14.692C16.083 13.311 16.083 11.073 14.702 9.692L13.771 8.761" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.5 11.173C9.852 11.005 10.182 10.775 10.473 10.483L10.483 10.473C11.864 9.092 11.864 6.854 10.483 5.473L8.308 3.298C6.927 1.917 4.689 1.917 3.308 3.298L3.298 3.308C1.917 4.689 1.917 6.927 3.298 8.308L4.229 9.239" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Link1;