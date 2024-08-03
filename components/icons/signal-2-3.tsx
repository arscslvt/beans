import React from 'react';
import IconProps from "@/types/icon.types"

function Signal23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.061,14.47c-.192,0-.384-.073-.531-.22-.282-.283-.777-.283-1.06,0-.293,.293-.768,.292-1.061,0-.293-.293-.293-.768,0-1.061,.85-.85,2.333-.85,3.183,0,.292,.293,.292,.768,0,1.061-.146,.146-.338,.219-.53,.219Z" fill={secondaryfill}/>
		<path d="M12.182,12.348c-.192,0-.384-.073-.53-.22-1.462-1.462-3.842-1.462-5.304,0-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061c2.047-2.047,5.378-2.047,7.425,0,.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={fill}/>
		<path d="M14.303,10.227c-.192,0-.384-.073-.53-.22-2.632-2.632-6.914-2.632-9.546,0-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061c3.217-3.217,8.45-3.217,11.667,0,.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
		<path d="M16.425,8.105c-.192,0-.384-.073-.53-.22-3.802-3.801-9.987-3.801-13.789,0-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061c4.387-4.386,11.523-4.386,15.91,0,.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Signal23;