import React from 'react';
import IconProps from "@/types/icon.types"

function PenWriting61(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.7811 6.9662L12.054 4.9308L7.38101 11.121C6.20901 12.673 6.39601 15.25 6.39601 15.25C6.39601 15.25 8.92501 14.723 10.097 13.171L14.7811 6.9662Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M12.054 4.932L14.77 6.982" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.39601 15.25C6.39601 15.25 8.92501 14.723 10.097 13.171L15.906 5.476C16.472 4.726 16.323 3.659 15.573 3.093C14.823 2.527 13.756 2.676 13.19 3.426L7.38101 11.121C6.20901 12.673 6.39601 15.25 6.39601 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.23199 15.25C2.29899 13.953 1.83499 12.792 1.76099 11.98C1.56699 9.84 3.95699 8.699 3.94099 6.311C3.93099 4.779 2.93499 3.541 2.12399 2.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PenWriting61;