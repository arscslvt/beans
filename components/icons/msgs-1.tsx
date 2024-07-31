import React from 'react';
import IconProps from "@/types/icon.types"

function Msgs1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.75 7.246C15.235 7.246 17.25 9.261 17.25 11.746C17.25 12.565 17.028 13.33 16.646 13.992C16.379 14.492 16.679 15.675 17.25 16.247C16.474 16.289 15.452 15.938 14.995 15.643C14.692 15.818 14.21 16.05 13.58 16.17C13.311 16.221 13.033 16.248 12.749 16.248C10.263 16.248 8.24902 14.233 8.24902 11.748C8.24902 9.262 10.264 7.248 12.749 7.248L12.75 7.246Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M12.337 4.767C11.242 2.961 9.263 1.75 6.997 1.75C3.547 1.75 0.75 4.547 0.75 7.998C0.75 9.134 1.058 10.197 1.589 11.115C1.959 11.81 1.544 13.452 0.75 14.245C1.827 14.303 3.247 13.817 3.88 13.406C4.301 13.649 4.97 13.972 5.844 14.137C5.956 14.158 6.076 14.154 6.19 14.169" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 7.246C15.235 7.246 17.25 9.261 17.25 11.746C17.25 12.565 17.028 13.33 16.646 13.992C16.379 14.492 16.679 15.675 17.25 16.247C16.474 16.289 15.452 15.938 14.995 15.643C14.692 15.818 14.21 16.05 13.58 16.17C13.311 16.221 13.033 16.248 12.749 16.248C10.263 16.248 8.24902 14.233 8.24902 11.748C8.24902 9.262 10.264 7.248 12.749 7.248L12.75 7.246Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Msgs1;