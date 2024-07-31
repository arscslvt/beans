import React from 'react';
import IconProps from "@/types/icon.types"

function Rotation3603(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11,9c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Z" fill={secondaryfill}/>
		<path d="M17.25,9c0-1.874-1.533-3.479-3.872-4.378-.899-2.338-2.505-3.872-4.378-3.872s-3.486,1.54-4.384,3.886c-2.421,.933-3.866,2.541-3.866,4.364,0,1.874,1.533,3.479,3.872,4.378,.899,2.338,2.505,3.872,4.378,3.872,1.11,0,2.16-.537,3.037-1.553,.271-.313,.236-.787-.078-1.058-.313-.27-.787-.235-1.058,.078-.407,.472-1.066,1.033-1.901,1.033-.939,0-1.806-.703-2.461-1.828,.774,.146,1.6,.225,2.461,.225,4.626,0,8.25-2.261,8.25-5.146Zm-1.5,0c0,.944-.71,1.814-1.844,2.47,.152-.796,.24-1.627,.24-2.47,0-.861-.079-1.687-.225-2.461,1.125,.655,1.828,1.522,1.828,2.461Zm-13.5,0c0-.906,.676-1.788,1.828-2.462-.146,.775-.225,1.601-.225,2.462s.079,1.687,.225,2.461c-1.125-.655-1.828-1.522-1.828-2.461Zm3.104,0c0-3.659,1.67-6.75,3.646-6.75,.939,0,1.806,.703,2.461,1.828-.774-.146-1.6-.225-2.461-.225-.372,0-.737,.015-1.095,.044-.413,.033-.72,.395-.687,.808s.402,.716,.808,.687c.318-.026,.644-.039,.974-.039,1.147,0,2.238,.164,3.196,.451,.286,.958,.451,2.049,.451,3.196,0,1.122-.163,2.215-.459,3.199-.956,.285-2.044,.448-3.187,.448s-2.238-.164-3.196-.451c-.286-.958-.451-2.049-.451-3.196Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Rotation3603;