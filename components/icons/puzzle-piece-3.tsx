import React from 'react';
import IconProps from "@/types/icon.types"

function PuzzlePiece3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.414,8.665c.233,.117,.509,.104,.73-.032,.221-.137,.356-.378,.356-.638v-1.744c0-1.517-1.233-2.75-2.75-2.75h-1.775c.01-.083,.025-.164,.025-.25,0-1.103-.897-2-2-2s-2,.897-2,2c0,.086,.015,.167,.025,.25h-1.775c-1.517,0-2.75,1.233-2.75,2.75v1.775c-.083-.011-.164-.025-.25-.025-1.103,0-2,.897-2,2s.897,2,2,2c.086,0,.167-.015,.25-.025v1.775c0,1.517,1.233,2.75,2.75,2.75h1.744c.26,0,.501-.135,.638-.355,.136-.221,.149-.498,.033-.73-.109-.219-.165-.442-.165-.665,0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5c0,.221-.056,.445-.166,.666-.116,.232-.103,.508,.034,.729,.137,.221,.378,.355,.638,.355h1.744c1.517,0,2.75-1.233,2.75-2.75v-1.744c0-.26-.135-.501-.356-.638s-.498-.15-.73-.032c-1.027,.515-2.164-.285-2.164-1.335,0-1.05,1.134-1.85,2.164-1.335Z" fill={fill}/>
	</g>
</svg>
	);
}

export default PuzzlePiece3;