import React from 'react';
import IconProps from "@/types/icon.types"

function LifeRing2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m4.831,4.086c.342-.209.739-.336,1.169-.336s.827.127,1.169.336c.021-.049.05-.095.06-.148l.521-2.867c-.55-.195-1.133-.321-1.75-.321s-1.2.126-1.75.321l.521,2.867c.01.053.039.099.06.148Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m7.914,4.831c.209.342.336.739.336,1.169s-.127.827-.336,1.169c.049.021.095.05.148.06l2.867.521c.195-.55.321-1.133.321-1.75s-.126-1.2-.321-1.75l-2.867.521c-.053.01-.099.039-.148.06Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m7.169,7.914c-.342.209-.739.336-1.169.336s-.827-.127-1.169-.336c-.021.049-.05.095-.06.148l-.521,2.867c.55.195,1.133.321,1.75.321s1.2-.126,1.75-.321l-.521-2.867c-.01-.053-.039-.099-.06-.148Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m4.086,7.169c-.209-.342-.336-.739-.336-1.169s.127-.827.336-1.169c-.049-.021-.095-.05-.148-.06l-2.867-.521c-.195.55-.321,1.133-.321,1.75s.126,1.2.321,1.75l2.867-.521c.053-.01.099-.039.148-.06Z" fill={secondaryfill} strokeWidth="0"/>
		<circle cx="6" cy="6" fill="none" r="5.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="6" cy="6" fill="none" r="2.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default LifeRing2;