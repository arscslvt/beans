import React from 'react';
import IconProps from "@/types/icon.types"

function PenWriting62(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.054" x2="14.77" y1="4.932" y2="6.982"/>
		<path d="M6.396,15.25s2.529-.527,3.701-2.079l5.809-7.695c.566-.75,.417-1.817-.333-2.383h0c-.75-.566-1.817-.417-2.383,.333l-5.809,7.695c-1.172,1.552-.985,4.129-.985,4.129Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.232,15.25c-1.933-1.297-2.397-2.458-2.471-3.27-.194-2.14,2.196-3.281,2.18-5.669-.01-1.532-1.006-2.77-1.817-3.561" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PenWriting62;