import React from 'react';
import IconProps from "@/types/icon.types"

function WandSparkle1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.6414 7.60865L10.3913 5.35864L3.0425 12.7075C2.65197 13.098 2.65197 13.7312 3.0425 14.1217L3.8783 14.9575C4.26882 15.348 4.90199 15.348 5.29251 14.9575L12.6414 7.60865Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M12.6966 3.05335L3.04249 12.7075C2.65197 13.098 2.65197 13.7312 3.04249 14.1217L3.87829 14.9575C4.26882 15.348 4.90198 15.348 5.29251 14.9575L14.9466 5.30337C15.3372 4.91284 15.3372 4.27968 14.9466 3.88915L14.1108 3.05335C13.7203 2.66283 13.0871 2.66283 12.6966 3.05335Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.387 5.363L12.637 7.613" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.24301 3.492L6.29701 3.177L5.98101 2.23C5.87901 1.924 5.37201 1.924 5.27001 2.23L4.95401 3.177L4.00801 3.492C3.85501 3.543 3.75101 3.686 3.75101 3.848C3.75101 4.01 3.85501 4.153 4.00801 4.204L4.95401 4.519L5.27001 5.466C5.32101 5.619 5.46401 5.722 5.62501 5.722C5.78601 5.722 5.93001 5.618 5.98001 5.466L6.29601 4.519L7.24201 4.204C7.39501 4.153 7.49901 4.01 7.49901 3.848C7.49901 3.686 7.39601 3.543 7.24301 3.492Z" fill={fill}/>
		<path d="M16.658 11.99L15.395 11.569L14.974 10.306C14.837 9.898 14.162 9.898 14.025 10.306L13.604 11.569L12.341 11.99C12.137 12.058 11.999 12.249 11.999 12.464C11.999 12.679 12.137 12.87 12.341 12.938L13.604 13.359L14.025 14.622C14.093 14.826 14.285 14.964 14.5 14.964C14.715 14.964 14.906 14.826 14.975 14.622L15.396 13.359L16.659 12.938C16.863 12.87 17.001 12.679 17.001 12.464C17.001 12.249 16.862 12.058 16.658 11.99Z" fill={fill}/>
		<path d="M9.25 2.5C9.66421 2.5 10 2.16421 10 1.75C10 1.33579 9.66421 1 9.25 1C8.83579 1 8.5 1.33579 8.5 1.75C8.5 2.16421 8.83579 2.5 9.25 2.5Z" fill={fill}/>
	</g>
</svg>
	);
}

export default WandSparkle1;