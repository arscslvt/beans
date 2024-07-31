import React from 'react';
import IconProps from "@/types/icon.types"

function Sitemap43(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.25,8h-1.5v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.5c-1.517,0-2.75,1.233-2.75,2.75v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-.689,.561-1.25,1.25-1.25h4.5c.689,0,1.25,.561,1.25,1.25v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-1.517-1.233-2.75-2.75-2.75Z" fill={secondaryfill}/>
		<rect height="6" width="6" fill={fill} rx="1.75" ry="1.75" x="6" y="1"/>
		<rect height="6" width="6" fill={fill} rx="1.75" ry="1.75" x="1.75" y="11"/>
		<rect height="6" width="6" fill={fill} rx="1.75" ry="1.75" x="10.25" y="11"/>
	</g>
</svg>
	);
}

export default Sitemap43;