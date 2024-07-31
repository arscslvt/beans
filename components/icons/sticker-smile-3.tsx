import React from 'react';
import IconProps from "@/types/icon.types"

function StickerSmile3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8c.108,0,.323-.015,.323-.015,.077-.005,.15-.023,.223-.052,1.679-.671,3.178-1.658,4.453-2.934,1.26-1.26,2.274-2.8,2.934-4.454,.028-.071,.046-.144,.052-.22,0,0,.016-.215,.016-.325,0-4.411-3.589-8-8-8Zm-2,5c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm1.104,6.909c-1.483-.271-2.785-1.192-3.514-2.555-.195-.365-.059-.819,.307-1.015,.367-.197,.819-.058,1.016,.307,.543,1.014,1.536,1.685,2.655,1.824-.212,.453-.37,.934-.463,1.439Zm2.896-6.909c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm1.938,6.938c-.946,.947-2.039,1.702-3.24,2.276-.118-.401-.199-.806-.199-1.215,0-2.481,2.019-4.5,4.5-4.5,.408,0,.812,.081,1.213,.198-.573,1.194-1.341,2.306-2.275,3.24Z" fill={fill}/>
	</g>
</svg>
	);
}

export default StickerSmile3;