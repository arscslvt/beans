import React from 'react';
import IconProps from "@/types/icon.types"

function GemSparkle1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.9816 3.24899C11.2047 3.65555 11.5757 3.97437 12.0337 4.12701L12.2685 4.20522L12.347 4.44033C12.6022 5.2054 13.3183 5.72199 14.125 5.72199C14.4757 5.72199 14.8105 5.624 15.0977 5.44965L15.731 6.12299C16.061 6.47399 16.091 7.00799 15.801 7.39299L9.808 15.349C9.405 15.884 8.594 15.884 8.192 15.349L2.199 7.39299C1.909 7.00799 1.939 6.47499 2.269 6.12299L4.673 3.56699C4.864 3.36399 5.131 3.24899 5.411 3.24899H10.9816Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M15.145 5.49999L15.731 6.12299C16.061 6.47399 16.091 7.00799 15.801 7.39299L9.808 15.349C9.405 15.884 8.594 15.884 8.192 15.349L2.199 7.39299C1.909 7.00799 1.939 6.47499 2.269 6.12299L4.673 3.56699C4.864 3.36399 5.131 3.24899 5.411 3.24899H10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.05299 6.75H15.951" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.88001 3.25L6.05701 6.75L8.76501 15.723" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.12 3.25L11.943 6.75L9.235 15.723" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.743 1.99199L14.797 1.67699L14.481 0.729988C14.379 0.423988 13.872 0.423988 13.77 0.729988L13.454 1.67699L12.508 1.99199C12.355 2.04299 12.251 2.18599 12.251 2.34799C12.251 2.50999 12.355 2.65299 12.508 2.70399L13.454 3.01899L13.77 3.96599C13.821 4.11899 13.964 4.22199 14.125 4.22199C14.286 4.22199 14.43 4.11799 14.48 3.96599L14.796 3.01899L15.742 2.70399C15.895 2.65299 15.999 2.50999 15.999 2.34799C15.999 2.18599 15.895 2.04299 15.742 1.99199H15.743Z" fill={fill}/>
		<path d="M1.75 3C2.16421 3 2.5 2.66421 2.5 2.25C2.5 1.83579 2.16421 1.5 1.75 1.5C1.33579 1.5 1 1.83579 1 2.25C1 2.66421 1.33579 3 1.75 3Z" fill={fill}/>
	</g>
</svg>
	);
}

export default GemSparkle1;