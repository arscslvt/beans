import React from 'react';
import IconProps from "@/types/icon.types"

function MicrophoneSlash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.25 4.75V5.74997L7.10751 10.8925C6.2855 10.3027 5.75 9.33889 5.75 8.25V4.75C5.75 2.95507 7.20507 1.5 9 1.5C10.7949 1.5 12.25 2.95507 12.25 4.75Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M12.25 5C12.25 3.20507 10.7949 1.75 9 1.75C7.20507 1.75 5.75 3.20507 5.75 5V8C5.75 9.79493 7.20507 11.25 9 11.25C10.7949 11.25 12.25 9.79493 12.25 8V5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.109 12.891C3.672 11.746 2.75 9.98 2.75 8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 8C15.25 11.452 12.452 14.25 9.00002 14.25C8.47302 14.25 7.96202 14.185 7.47302 14.062" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 14.25V16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2 16L16 2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default MicrophoneSlash1;