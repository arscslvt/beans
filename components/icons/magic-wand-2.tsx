import React from 'react';
import IconProps from "@/types/icon.types"

function MagicWand2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.75" x2="10.749" y1="15.25" y2="7.251"/>
		<polygon fill="none" points="9.998 2.052 12.337 3.579 14.921 2.519 14.191 5.215 15.998 7.344 13.209 7.483 11.742 9.86 10.748 7.25 8.034 6.59 10.209 4.837 9.998 2.052" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default MagicWand2;