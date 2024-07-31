import React from 'react';
import IconProps from "@/types/icon.types"

function Trash5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m11,1.5h-3v-.25c0-.689-.561-1.25-1.25-1.25h-1.5c-.689,0-1.25.561-1.25,1.25v.25H1c-.414,0-.75.336-.75.75s.336.75.75.75h10c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m10.021,4.73c-.142-.147-.336-.23-.541-.23H2.519c-.204,0-.399.083-.541.23-.141.147-.217.345-.209.549l.175,4.558c.047,1.213,1.035,2.163,2.249,2.163h3.613c1.214,0,2.201-.95,2.249-2.164l.175-4.558c.008-.204-.068-.402-.209-.549Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Trash5;