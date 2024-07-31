import React from 'react';
import IconProps from "@/types/icon.types"

function Phone2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m7.028,8.29l.816-.947c.219-.273.594-.365.914-.223l1.784.728c.345.153.528.533.433.898l-.51,1.553c-.139.425-.545.723-.99.687-2.254-.182-4.279-1.172-5.786-2.68l.005.005c-1.508-1.507-2.498-3.532-2.68-5.786-.036-.446.263-.851.687-.99l1.553-.51c.365-.095.745.089.898.433l.728,1.784c.142.32.051.696-.223.914l-.947.816" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Phone2;