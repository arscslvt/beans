import React from 'react';
import IconProps from "@/types/icon.types"

function PenWriting41(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.836 10.164C6.836 10.164 8.87 10.13 9.586 9.414C10.302 8.698 14.836 4.164 14.836 4.164C15.388 3.612 15.388 2.716 14.836 2.164C14.284 1.612 13.388 1.612 12.836 2.164C12.836 2.164 8.302 6.698 7.586 7.414C6.87 8.13 6.836 10.164 6.836 10.164Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.25 10.25H3.25C2.422 10.25 1.75 10.922 1.75 11.75C1.75 12.578 2.422 13.25 3.25 13.25H14.75C15.578 13.25 16.25 13.922 16.25 14.75C16.25 15.578 15.578 16.25 14.75 16.25H12.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.836 10.164C6.836 10.164 8.87 10.13 9.586 9.414C10.302 8.698 14.836 4.164 14.836 4.164C15.388 3.612 15.388 2.716 14.836 2.164C14.284 1.612 13.388 1.612 12.836 2.164C12.836 2.164 8.302 6.698 7.586 7.414C6.87 8.13 6.836 10.164 6.836 10.164Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PenWriting41;