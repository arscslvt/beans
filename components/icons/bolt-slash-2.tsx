import React from 'react';
import IconProps from "@/types/icon.types"

function BoltSlash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m8.465,13.07l-.319,3.159c-.037.26.299.394.451.18l5.872-8.265c.118-.166,0-.395-.204-.395h-.481" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m10.25,7.75h-1l.604-5.98c.037-.26-.299-.394-.451-.18L3.531,9.855c-.118.166,0,.395.204.395h4.016" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2" x2="16" y1="16" y2="2"/>
	</g>
</svg>
	);
}

export default BoltSlash2;