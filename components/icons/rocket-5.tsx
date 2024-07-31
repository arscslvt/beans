import React from 'react';
import IconProps from "@/types/icon.types"

function Rocket5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m2.058,12H.75c-.414,0-.75-.336-.75-.75v-1.308c0-.807.475-1.543,1.21-1.875.378-.172.822-.002.992.375.17.378.002.822-.375.992-.199.09-.328.289-.328.508v.558h.558c.219,0,.418-.129.509-.328.171-.377.616-.544.992-.374.377.17.545.615.374.992-.333.735-1.068,1.21-1.875,1.21Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m11.78.22c-.156-.156-.375-.239-.595-.217-2.674.23-4.862,1.146-6.437,2.596h-1.315c-.547,0-1.057.245-1.398.673L.164,5.615c-.16.201-.207.469-.124.712.083.243.285.426.535.486l2.16.517,1.934,1.934.517,2.16c.06.25.243.452.486.535.08.027.162.041.244.041.167,0,.333-.056.468-.164l2.343-1.872c.428-.341.673-.851.673-1.398v-1.315c1.449-1.575,2.366-3.763,2.596-6.437.019-.221-.06-.438-.217-.595Zm-3.78,4.78c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Rocket5;