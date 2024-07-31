import React from 'react';
import IconProps from "@/types/icon.types"

function Video5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m11.555,3.065c-.269-.119-.586-.072-.807.127l-2.5,2.25c-.158.143-.248.345-.248.558s.09.415.248.558l2.5,2.25c.141.126.32.192.502.192.104,0,.207-.021.305-.065.271-.121.445-.389.445-.685V3.75c0-.296-.174-.564-.445-.685Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m6.253,1h-3.5C1.236,1,.003,2.233.003,3.75v4.5C.003,9.767,1.236,11,2.753,11h3.5c1.517,0,2.75-1.233,2.75-2.75V3.75c0-1.517-1.233-2.75-2.75-2.75Zm-3.253,4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Video5;