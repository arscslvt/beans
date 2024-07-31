import React from 'react';
import IconProps from "@/types/icon.types"

function MagicWand1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9.998 2.052L12.337 3.579L14.921 2.519L14.191 5.215L15.998 7.344L13.209 7.483L11.742 9.86L10.748 7.25L8.034 6.59L10.209 4.837L9.998 2.052Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M2.75 15.25L10.749 7.25101" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.998 2.052L12.337 3.579L14.921 2.519L14.191 5.215L15.998 7.344L13.209 7.483L11.742 9.86L10.748 7.25L8.034 6.59L10.209 4.837L9.998 2.052Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default MagicWand1;