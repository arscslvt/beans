import React from 'react';
import IconProps from "@/types/icon.types"

function Industry2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.431,4.75h.638c.525,0,.96,.405,.997,.929l.607,8.5c.041,.579-.417,1.071-.997,1.071h-1.852c-.58,0-1.039-.492-.997-1.071l.607-8.5c.037-.523,.473-.929,.997-.929Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4,2.598c.306-.508,.863-.848,1.5-.848h1.75c.696,0,1.298-.407,1.579-.996" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.759,8.721l3.491-2.971v4.25l5-4.25V14.25c0,.552-.448,1-1,1H4.676" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.75" x2="13.25" y1="12" y2="12"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="8.75" x2="9.25" y1="12" y2="12"/>
	</g>
</svg>
	);
}

export default Industry2;