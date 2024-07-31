import React from 'react';
import IconProps from "@/types/icon.types"

function UserLaptop2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="8" cy="5.5" fill="none" r="3.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.953,15c1.298-1.958,3.522-3.25,6.047-3.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.925,16.25h-6.175l1.868-4.203c.08-.181,.259-.297,.457-.297h5.406c.362,0,.604,.372,.457,.703l-1.556,3.5c-.08,.181-.259,.297-.457,.297Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="8.75" x2="5.75" y1="16.25" y2="16.25"/>
	</g>
</svg>
	);
}

export default UserLaptop2;