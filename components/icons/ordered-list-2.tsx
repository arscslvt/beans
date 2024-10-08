import React from 'react';
import IconProps from "@/types/icon.types"

function OrderedList2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M2.5,11.661c.259-.921,1.152-1.425,2.116-1.411,.965,.014,1.872,.446,1.929,1.411s-.965,1.612-2.023,2.044c-1.058,.432-1.936,.835-2.023,2.044H6.548" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75,7.5V2s-.63,1.108-1.967,1.364" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9.5" x2="16.25" y1="5.25" y2="5.25"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9.5" x2="16.25" y1="12.75" y2="12.75"/>
	</g>
</svg>
	);
}

export default OrderedList2;