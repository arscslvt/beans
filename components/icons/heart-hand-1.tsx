import React from 'react';
import IconProps from "@/types/icon.types"

function HeartHand1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.58049 10.1511C6.36853 10.2617 6.12088 10.2617 5.90892 10.1511C4.78843 9.56656 1.24999 7.44835 1.24999 4.00411C1.24428 2.4911 2.46539 1.25928 3.98054 1.25C4.8912 1.26142 5.73835 1.72103 6.24506 2.47754C6.75107 1.72103 7.59821 1.26142 8.50958 1.25C10.024 1.25928 11.2458 2.4911 11.2401 4.00411C11.2401 5.67795 10.4043 7.03862 9.41633 8.06226L9.12499 7.443C8.83199 6.817 8.08799 6.547 7.46199 6.84C6.83699 7.132 6.56599 7.876 6.85799 8.501L7.40833 9.67344C7.07517 9.88379 6.78682 10.0434 6.58049 10.1511Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M10.955 5.681C11.138 5.163 11.25 4.606 11.25 4.006C11.256 2.492 10.033 1.259 8.51699 1.25C7.60499 1.262 6.75699 1.721 6.24999 2.479C5.74299 1.722 4.89499 1.262 3.98299 1.25C2.46699 1.259 1.24399 2.492 1.24999 4.006C1.24999 6.468 3.05499 8.249 4.49699 9.281" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.75 14.725C16.75 12.666 16.514 11.086 15.75 10.502C14.875 9.833 12.598 9.664 10.455 10.27L9.12499 7.443C8.83199 6.817 8.08799 6.547 7.46199 6.84C6.83699 7.132 6.56599 7.876 6.85799 8.501L9.41899 13.957L6.69499 13.456C6.10799 13.348 5.52799 13.68 5.32399 14.241C5.09199 14.878 5.42199 15.581 6.05999 15.81L8.67599 16.751" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default HeartHand1;