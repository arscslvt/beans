import React from 'react';
import IconProps from "@/types/icon.types"

function SquareDottedArrowBottomRight3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="2.75" cy="9" fill={fill} r=".75"/>
		<circle cx="9" cy="2.75" fill={fill} r=".75"/>
		<circle cx="2.75" cy="2.75" fill={fill} r=".75"/>
		<circle cx="2.75" cy="5.875" fill={fill} r=".75"/>
		<circle cx="2.75" cy="12.125" fill={fill} r=".75"/>
		<circle cx="2.75" cy="15.25" fill={fill} r=".75"/>
		<circle cx="15.25" cy="2.75" fill={fill} r=".75"/>
		<circle cx="15.25" cy="5.875" fill={fill} r=".75"/>
		<circle cx="12.125" cy="2.75" fill={fill} r=".75"/>
		<circle cx="5.875" cy="2.75" fill={fill} r=".75"/>
		<circle cx="5.875" cy="15.25" fill={fill} r=".75"/>
		<path d="M16,9.25c0-.414-.336-.75-.75-.75h-6c-.414,0-.75,.336-.75,.75v6c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.189l4.72,4.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-4.72-4.72h4.189c.414,0,.75-.336,.75-.75Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default SquareDottedArrowBottomRight3;