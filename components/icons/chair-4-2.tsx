import React from 'react';
import IconProps from "@/types/icon.types"

function Chair42(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="11.25" y2="17.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="5.75" y1="15" y2="16.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="12.25" y1="15" y2="16.75"/>
		<path d="M15.054,7.436l.15-.425c.128-.362,.146-.756,.042-1.126C14,1.417,13.686,.765,9,.765,4.314,.765,4,1.417,2.753,5.885c-.103,.37-.085,.764,.042,1.126l.15,.425" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9,11.25h4c.552,0,1-.436,1-1s-.715-1.5-3-1.5h-2c-.602,0-1.285,0-2,0-2.285,0-3,.928-3,1.5,0,.564,.448,1,1,1h4Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Chair42;