import React from 'react';
import IconProps from "@/types/icon.types"

function Satellite1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.04301 11.043L6.95701 9.957C6.56601 9.566 6.56601 8.933 6.95701 8.543L13.146 2.354C13.768 1.732 14.767 1.57 15.485 2.077C16.4 2.722 16.486 4.014 15.723 4.777L9.45701 11.043C9.06601 11.434 8.43301 11.434 8.04301 11.043Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.25 13.75C5.593 13.75 4.25 12.407 4.25 10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25 16.75C3.936 16.75 1.25 14.064 1.25 10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.04301 11.043L6.95701 9.957C6.56601 9.566 6.56601 8.933 6.95701 8.543L13.146 2.354C13.768 1.732 14.767 1.57 15.485 2.077C16.4 2.722 16.486 4.014 15.723 4.777L9.45701 11.043C9.06601 11.434 8.43301 11.434 8.04301 11.043Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.29847 4.65169L7.65202 4.29814C8.04255 3.90762 8.04255 3.27445 7.65202 2.88393L6.06103 1.29294C5.67051 0.902413 5.03734 0.902413 4.64682 1.29294L4.29327 1.64649C3.90274 2.03701 3.90274 2.67018 4.29327 3.0607L5.88426 4.65169C6.27478 5.04222 6.90795 5.04222 7.29847 4.65169Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.5 4.45L9.275 6.225" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.3533 13.7067L16.7069 13.3531C17.0974 12.9626 17.0974 12.3295 16.7069 11.9389L15.1159 10.3479C14.7254 9.95742 14.0922 9.95742 13.7017 10.3479L13.3481 10.7015C12.9576 11.092 12.9576 11.7252 13.3481 12.1157L14.9391 13.7067C15.3297 14.0972 15.9628 14.0972 16.3533 13.7067Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.55 10.5L11.775 8.72501" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Satellite1;