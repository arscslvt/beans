import React from 'react';
import IconProps from "@/types/icon.types"

function Tags1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75 4.25H7.336C7.601 4.25 7.856 4.355 8.043 4.543L13.836 10.336C14.617 11.117 14.617 12.383 13.836 13.164L10.664 16.336C9.883 17.117 8.617 17.117 7.836 16.336L2.043 10.543C1.855 10.355 1.75 10.101 1.75 9.836V4.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M1.75 4.25H7.336C7.601 4.25 7.856 4.355 8.043 4.543L13.836 10.336C14.617 11.117 14.617 12.383 13.836 13.164L10.664 16.336C9.883 17.117 8.617 17.117 7.836 16.336L2.043 10.543C1.855 10.355 1.75 10.101 1.75 9.836V4.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.25 1.75V1.25H8.836C9.101 1.25 9.356 1.355 9.543 1.543L15.336 7.336C15.768 7.768 15.961 8.348 15.915 8.913" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 9C5.94036 9 6.5 8.44036 6.5 7.75C6.5 7.05964 5.94036 6.5 5.25 6.5C4.55964 6.5 4 7.05964 4 7.75C4 8.44036 4.55964 9 5.25 9Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Tags1;