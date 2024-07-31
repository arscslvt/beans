import React from 'react';
import IconProps from "@/types/icon.types"

function Bullhorn2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.805,10.75l.982,4.647c.114,.54-.231,1.071-.772,1.185l-.978,.207c-.54,.114-1.071-.231-1.185-.772l-1.102-5.267" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.185,5.912c-.117,.095-.185,.237-.185,.388v2.399c0,.151,.068,.293,.185,.388,.117,.095,.271,.132,.418,.101,.822-.173,1.397-.868,1.397-1.689s-.575-1.516-1.397-1.689c-.147-.031-.301,.006-.418,.101Z" fill={secondaryfill}/>
		<path d="M14.25,13.25s-1.937-2.5-4.25-2.5c-2.312,0-5,0-5,0-1.795,0-3.25-1.455-3.25-3.25,0-1.795,1.455-3.25,3.25-3.25h5c2.312,0,4.25-2.5,4.25-2.5V13.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.75" x2="5.75" y1="4.25" y2="10.75"/>
	</g>
</svg>
	);
}

export default Bullhorn2;