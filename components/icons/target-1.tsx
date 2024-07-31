import React from 'react';
import IconProps from "@/types/icon.types"

function Target1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.6336 1.9348C10.1086 1.81389 9.56176 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 8.43824 16.1861 7.89141 16.0652 7.36637C15.6459 7.77245 15.0847 8 14.5 8H13.182L13.1413 8.04069C13.2124 8.34898 13.25 8.6701 13.25 9C13.25 11.3472 11.3472 13.25 9 13.25C6.65279 13.25 4.75 11.3472 4.75 9C4.75 6.65279 6.65279 4.75 9 4.75C9.3299 4.75 9.65102 4.78759 9.95931 4.85871L10 4.81802V3.5C10 2.91534 10.2276 2.35413 10.6336 1.9348Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M12.25 5.75V3.5L14.75 1V3.25H17L14.5 5.75H12.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 9L12.25 5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 5.75V3.5L14.75 1V3.25H17L14.5 5.75H12.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.36 1.882C9.919 1.798 9.465 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 8.535 16.202 8.081 16.118 7.64" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.649 4.815C9.436 4.782 9.222 4.75 9 4.75C6.653 4.75 4.75 6.653 4.75 9C4.75 11.347 6.653 13.25 9 13.25C11.347 13.25 13.25 11.347 13.25 9C13.25 8.778 13.217 8.564 13.185 8.351" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Target1;