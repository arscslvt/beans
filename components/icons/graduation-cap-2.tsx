import React from 'react';
import IconProps from "@/types/icon.types"

function GraduationCap2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9.458,2.361l6.332,3.26c.613,.316,.613,1.192,0,1.508l-6.332,3.26c-.288,.148-.629,.148-.916,0L2.21,7.129c-.613-.316-.613-1.192,0-1.508l6.332-3.26c.288-.148,.629-.148,.916,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25,6.375c-.171,.74-.318,1.722-.281,2.875,.027,.834,.144,1.562,.281,2.156" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25,10.75v3.25c0,1.104,2.127,2,4.75,2s4.75-.896,4.75-2v-3.25" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default GraduationCap2;