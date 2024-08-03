import React from 'react';
import IconProps from "@/types/icon.types"

function LockOpen23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.25,9c-.414,0-.75-.336-.75-.75v-3.25c0-1.378-1.122-2.5-2.5-2.5S1.5,3.622,1.5,5v1.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.25C0,2.794,1.794,1,4,1s4,1.794,4,4v3.25c0,.414-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M13.25,7.5H5.75c-1.517,0-2.75,1.233-2.75,2.75v4c0,1.517,1.233,2.75,2.75,2.75h7.5c1.517,0,2.75-1.233,2.75-2.75v-4c0-1.517-1.233-2.75-2.75-2.75Zm-3,5.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1Z" fill={fill}/>
	</g>
</svg>
	);
}

export default LockOpen23;