import React from 'react';
import IconProps from "@/types/icon.types"

function CircleHalfDottedCheck4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c4.411,0,8-3.589,8-8S13.411,1,9,1Z" fill={fill}/>
		<path d="M12.843,6.708c.253-.328,.193-.799-.135-1.052-.326-.252-.799-.193-1.052,.135l-3.701,4.789-1.648-1.832c-.277-.308-.751-.332-1.06-.056-.308,.277-.333,.751-.056,1.06l2.25,2.5c.143,.158,.345,.248,.558,.248,.009,0,.019,0,.028,0,.222-.008,.429-.115,.565-.291l4.25-5.5Z" fill={secondaryfill}/>
		<path d="M3.343,13.596c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0s.293-.768,0-1.061-.768-.293-1.061,0Z" fill={fill}/>
		<path d="M3.343,3.343c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0s.293-.768,0-1.061-.768-.293-1.061,0Z" fill={fill}/>
		<path d="M6.513,15.005c-.383-.159-.821,.023-.98,.406s.023,.821,.406,.98,.821-.023,.98-.406c.159-.383-.023-.822-.406-.98Z" fill={fill}/>
		<path d="M2.015,11.082c-.383,.159-.564,.597-.406,.98,.159,.383,.597,.564,.98,.406,.383-.159,.564-.597,.406-.98s-.597-.564-.98-.406Z" fill={fill}/>
		<path d="M2.589,5.533c-.383-.159-.821,.023-.98,.406-.159,.383,.023,.821,.406,.98s.821-.023,.98-.406c.159-.383-.023-.821-.406-.98Z" fill={fill}/>
		<path d="M6.513,2.995c.383-.158,.564-.597,.406-.98-.159-.382-.597-.564-.98-.406s-.564,.597-.406,.98,.597,.564,.98,.406Z" fill={fill}/>
		<circle cx="1.75" cy="9" fill={fill} r=".75"/>
	</g>
</svg>
	);
}

export default CircleHalfDottedCheck4;