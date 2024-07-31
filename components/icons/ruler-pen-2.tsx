import React from 'react';
import IconProps from "@/types/icon.types"

function RulerPen2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9.533,5.437l-3.331-3.331c-.391-.391-1.024-.391-1.414,0l-2.682,2.682c-.391,.391-.391,1.024,0,1.414l3.331,3.331" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.467,12.563l3.331,3.331c.391,.391,1.024,.391,1.414,0l2.682-2.682c.391-.391,.391-1.024,0-1.414l-1.581-1.581" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.25,15.75s3.599-.568,4.546-1.515c.947-.947,8.577-8.577,8.577-8.577,.837-.837,.837-2.194,0-3.03-.837-.837-2.194-.837-3.03,0,0,0-7.63,7.63-8.577,8.577s-1.515,4.546-1.515,4.546h0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.416" x2="5.184" y1="7.513" y2="5.745"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.487" x2="12.255" y1="14.584" y2="12.816"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="11.121" x2="14.152" y1="3.848" y2="6.879"/>
	</g>
</svg>
	);
}

export default RulerPen2;