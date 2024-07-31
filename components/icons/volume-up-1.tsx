import React from 'react';
import IconProps from "@/types/icon.types"

function VolumeUp1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5 5.75H2.25C1.422 5.75 0.75 6.422 0.75 7.25V10.75C0.75 11.578 1.422 12.25 2.25 12.25H5L10.48 15.758C10.813 15.971 11.25 15.732 11.25 15.337V2.664C11.25 2.269 10.813 2.03 10.48 2.243L5 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M5 5.75H2.25C1.422 5.75 0.75 6.422 0.75 7.25V10.75C0.75 11.578 1.422 12.25 2.25 12.25H5L10.48 15.758C10.813 15.971 11.25 15.732 11.25 15.337V2.664C11.25 2.269 10.813 2.03 10.48 2.243L5 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.914 7.586C14.695 8.367 14.695 9.633 13.914 10.414" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.859 5.64101C17.714 7.49601 17.714 10.504 15.859 12.359" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default VolumeUp1;