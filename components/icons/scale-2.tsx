import React from 'react';
import IconProps from "@/types/icon.types"

function Scale2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.25" x2="3.525" y1="3.75" y2="3.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.75" x2="14.475" y1="3.75" y2="3.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="5.5" y2="15.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="13.25" x2="4.75" y1="15.75" y2="15.75"/>
		<path d="M.775,9.25c-.008,.083-.025,.164-.025,.25,0,1.519,1.231,2.75,2.75,2.75s2.75-1.231,2.75-2.75c0-.086-.018-.167-.025-.25H.775Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.225,9.25c.008,.083,.025,.164,.025,.25,0,1.519-1.231,2.75-2.75,2.75-1.519,0-2.75-1.231-2.75-2.75,0-.086,.018-.167,.025-.25h5.45Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="6.225 9.25 3.525 3.75 .775 9.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="11.775 9.25 14.475 3.75 17.225 9.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="9" cy="3.75" fill="none" r="1.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Scale2;