import React from 'react';
import IconProps from "@/types/icon.types"

function BookmarkSlash3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.911,3.089c-.298-1.197-1.373-2.089-2.661-2.089H5.75c-1.517,0-2.75,1.233-2.75,2.75V15L14.911,3.089Z" fill={fill}/>
		<path d="M4.591,16.591l4.409-2.939,4.834,3.223c.125,.083,.271,.126,.416,.126,.122,0,.243-.029,.354-.089,.244-.13,.396-.385,.396-.661V6.182L4.591,16.591Z" fill={fill}/>
		<path d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default BookmarkSlash3;