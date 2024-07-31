import React from 'react';
import IconProps from "@/types/icon.types"

function SideProfile3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.25,16.25v-2.5h1.639c1.049,0,1.919-.81,1.995-1.856l.112-1.543,1.504-.601-1.5-2c0-3.736-3.415-6.675-7.293-5.865-2.266,.473-4.097,2.305-4.571,4.57-.595,2.846,.84,5.418,3.114,6.6v3.195" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="12.25" cy="7.25" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default SideProfile3;