import React from 'react';
import IconProps from "@/types/icon.types"

function GamingButtons2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="4.5" width="4.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="2.75" y="2.75"/>
		<circle cx="13" cy="13" fill="none" r="2.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.25" x2="2.75" y1="10.75" y2="15.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.75" x2="7.25" y1="10.75" y2="15.25"/>
		<path d="M12.567,2.576l-2.266,3.924c-.192,.333,.048,.75,.433,.75h4.531c.385,0,.625-.417,.433-.75l-2.266-3.924c-.192-.333-.674-.333-.866,0Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default GamingButtons2;