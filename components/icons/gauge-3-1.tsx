import React from 'react';
import IconProps from "@/types/icon.types"

function Gauge31(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.74998 15H14.25C15.4892 13.6992 16.25 11.9384 16.25 10C16.25 5.99594 13.0041 2.75 9 2.75C4.99594 2.75 1.75 5.99594 1.75 10C1.75 11.9384 2.51075 13.6992 3.74998 15Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 2.75V4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.127 4.873L12.712 6.288" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 10H14.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.87299 4.873L8.29299 9.293" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 10H3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6 3.398C6.914 2.982 7.93 2.75 9 2.75C13.004 2.75 16.25 5.996 16.25 10C16.25 12.002 15.439 13.815 14.127 15.127L12.713 13.713" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.288 13.712L3.874 15.126C2.562 13.814 1.75 12.002 1.75 9.999C1.75 8.929 1.982 7.913 2.398 6.999" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Gauge31;