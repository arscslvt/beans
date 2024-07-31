import React from 'react';
import IconProps from "@/types/icon.types"

function Bicycle2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="13.75" cy="11.25" fill="none" r="3" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25,11.25c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3c.683,0,1.314,.229,1.818,.613" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25,4.75h1.982l2.471,5.804c.14,.33-.102,.696-.46,.696h-2.984c-.414,0-.648-.474-.398-.803l2.435-3.197h4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75,11.25L10.344,3.25h3.406c.69,0,1.25,.56,1.25,1.25,0,.605-.429,1.109-1,1.225" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bicycle2;