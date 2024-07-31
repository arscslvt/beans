import React from 'react';
import IconProps from "@/types/icon.types"

function PenNib31(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.241 8.057L13.649 12.553C13.532 12.883 13.252 13.128 12.909 13.198L5.752 14.679C5.224 14.788 4.756 14.321 4.866 13.793L6.347 6.636C6.418 6.293 6.663 6.013 6.992 5.896L11.488 4.304" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10 9.545L5.07001 14.475" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.44299 14.142C1.16799 13.139 0.835992 12.249 0.776992 11.604C0.602992 9.68 2.75199 8.653 2.73799 6.506C2.72899 5.129 1.83399 4.015 1.10399 3.304" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.241 8.057L13.649 12.553C13.532 12.883 13.252 13.128 12.909 13.198L5.752 14.679C5.224 14.788 4.756 14.321 4.866 13.793L6.347 6.636C6.418 6.293 6.663 6.013 6.992 5.896L11.488 4.304" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.496 2.296L11.195 2.597C10.804 2.988 10.804 3.621 11.195 4.011L13.364 6.18L15.533 8.349C15.924 8.74 16.557 8.74 16.947 8.349L17.248 8.048" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10 10.295C10.4142 10.295 10.75 9.95921 10.75 9.545C10.75 9.13079 10.4142 8.795 10 8.795C9.58579 8.795 9.25 9.13079 9.25 9.545C9.25 9.95921 9.58579 10.295 10 10.295Z" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PenNib31;