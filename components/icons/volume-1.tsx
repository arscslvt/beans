import React from 'react';
import IconProps from "@/types/icon.types"

function Volume1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8 5.75H4.25C3.422 5.75 2.75 6.422 2.75 7.25V10.75C2.75 11.578 3.422 12.25 4.25 12.25H8L13.48 15.758C13.813 15.971 14.25 15.732 14.25 15.337V2.664C14.25 2.269 13.813 2.03 13.48 2.243L8 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M8 5.75H4.25C3.422 5.75 2.75 6.422 2.75 7.25V10.75C2.75 11.578 3.422 12.25 4.25 12.25H8L13.48 15.758C13.813 15.971 14.25 15.732 14.25 15.337V2.664C14.25 2.269 13.813 2.03 13.48 2.243L8 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Volume1;