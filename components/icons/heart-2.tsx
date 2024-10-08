import React from 'react';
import IconProps from "@/types/icon.types"

function Heart2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Heart2;