import React from 'react';
import IconProps from "@/types/icon.types"

function Bookmarks2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.25,16.25l-4.75-3.5-4.75,3.5V6.75c0-1.105,.895-2,2-2h5.5c1.105,0,2,.895,2,2v9.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.781,2c.287-.159,.617-.25,.969-.25h5.5c1.105,0,2,.895,2,2V13.25" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bookmarks2;