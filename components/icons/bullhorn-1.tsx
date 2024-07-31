import React from 'react';
import IconProps from "@/types/icon.types"

function Bullhorn1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10 10.75C12.313 10.75 14.25 13.25 14.25 13.25V1.75C14.25 1.75 12.312 4.25 10 4.25H5.75V10.75H10Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M8.805 10.75L9.787 15.397C9.901 15.937 9.556 16.468 9.015 16.582L8.037 16.789C7.497 16.903 6.966 16.558 6.852 16.017L5.75 10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.185 5.91201C16.068 6.00701 16 6.14901 16 6.30001V8.69901C16 8.85001 16.068 8.99201 16.185 9.08701C16.302 9.18201 16.456 9.21901 16.603 9.18801C17.425 9.01501 18 8.32001 18 7.49901C18 6.67801 17.425 5.98301 16.603 5.81001C16.456 5.77901 16.302 5.81601 16.185 5.91101V5.91201Z" fill={fill}/>
		<path d="M14.25 13.25C14.25 13.25 12.313 10.75 10 10.75C7.688 10.75 5 10.75 5 10.75C3.205 10.75 1.75 9.295 1.75 7.5C1.75 5.705 3.205 4.25 5 4.25H10C12.312 4.25 14.25 1.75 14.25 1.75V13.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.75 4.25V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bullhorn1;