import React from 'react';
import IconProps from "@/types/icon.types"

function WindowExpandBottomRight3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="7.5" width="7.5" fill={secondaryfill} rx="2.75" ry="2.75" x="2" y="2"/>
		<path d="M9,12.75c0,.414,.336,.75,.75,.75h3c.414,0,.75-.336,.75-.75v-3c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.189l-1.47-1.47c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.47,1.47h-1.189c-.414,0-.75,.336-.75,.75Z" fill={secondaryfill}/>
		<path d="M13.25,2h-2.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.5c.689,0,1.25,.561,1.25,1.25V13.25c0,.689-.561,1.25-1.25,1.25H4.75c-.689,0-1.25-.561-1.25-1.25v-2.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2.5c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default WindowExpandBottomRight3;