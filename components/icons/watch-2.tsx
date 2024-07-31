import React from 'react';
import IconProps from "@/types/icon.types"

function Watch2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.25,4.75l.361-2.164c.08-.482,.498-.836,.986-.836h2.806c.489,0,.906,.353,.986,.836l.361,2.164" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25,13.25l.361,2.164c.08,.482,.498,.836,.986,.836h2.806c.489,0,.906-.353,.986-.836l.361-2.164" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="9 7 9 9 11 10.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="8.5" width="9.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="4.25" y="4.75"/>
	</g>
</svg>
	);
}

export default Watch2;