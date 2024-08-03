import React from 'react';
import IconProps from "@/types/icon.types"

function Bolt4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m15.154,7.541c-.172-.333-.513-.541-.888-.541h-4.186l.517-5.124c.065-.458-.189-.898-.62-1.07-.429-.172-.918-.027-1.186.35L2.918,9.421c-.217.307-.244.705-.072,1.038s.513.541.888.541h4.186l-.517,5.124c-.065.458.189.898.62,1.07.121.048.247.072.372.072.316,0,.622-.151.814-.422l5.874-8.265c.217-.307.244-.705.072-1.038Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Bolt4;