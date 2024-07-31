import React from 'react';
import IconProps from "@/types/icon.types"

function Notification4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.75,16.5H4.25c-1.517,0-2.75-1.233-2.75-2.75V5.25c0-1.517,1.233-2.75,2.75-2.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H4.25c-.689,0-1.25,.561-1.25,1.25V13.75c0,.689,.561,1.25,1.25,1.25H12.75c.689,0,1.25-.561,1.25-1.25v-5.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.25c0,1.517-1.233,2.75-2.75,2.75Z" fill={fill}/>
		<circle cx="14.5" cy="3.5" fill={secondaryfill} r="2.5"/>
	</g>
</svg>
	);
}

export default Notification4;