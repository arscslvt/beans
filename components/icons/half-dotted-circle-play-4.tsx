import React from 'react';
import IconProps from "@/types/icon.types"

function HalfDottedCirclePlay4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.031,10.08c.388-.227,.62-.63,.62-1.08s-.232-.853-.62-1.08c0,0,0,0,0,0l-3.651-2.129c-.387-.226-.866-.226-1.252-.004-.387,.223-.627,.638-.627,1.084v4.259c0,.446,.24,.861,.627,1.084,.192,.11,.407,.166,.623,.166,.218,0,.436-.057,.63-.169l3.651-2.13Z" fill={secondaryfill}/>
		<path d="M9,1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c4.411,0,8-3.589,8-8S13.411,1,9,1Z" fill={fill}/>
		<path d="M3.343,13.596c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0,.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z" fill={fill}/>
		<path d="M3.343,3.343c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0,.293-.768,0-1.061c-.293-.293-.768-.293-1.061,0Z" fill={fill}/>
		<path d="M6.513,15.005c-.383-.158-.821,.023-.98,.406-.159,.383,.023,.821,.406,.98,.383,.158,.821-.023,.98-.406s-.023-.822-.406-.98Z" fill={fill}/>
		<path d="M2.015,11.082c-.383,.158-.564,.597-.406,.98,.159,.383,.597,.564,.98,.406,.383-.158,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406Z" fill={fill}/>
		<path d="M2.589,5.533c-.383-.159-.821,.023-.98,.406-.159,.383,.023,.822,.406,.98,.383,.158,.821-.023,.98-.406,.159-.383-.023-.821-.406-.98Z" fill={fill}/>
		<path d="M6.513,2.995c.383-.158,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406-.383,.159-.564,.597-.406,.98s.597,.564,.98,.406Z" fill={fill}/>
		<circle cx="1.75" cy="9" fill={fill} r=".75"/>
	</g>
</svg>
	);
}

export default HalfDottedCirclePlay4;