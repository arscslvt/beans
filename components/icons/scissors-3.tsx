import React from 'react';
import IconProps from "@/types/icon.types"

function Scissors3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.25,8.5h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M9.25,7h-2.667c.258-.443,.417-.951,.417-1.5,0-1.654-1.346-3-3-3S1,3.846,1,5.5s1.346,3,3,3h5.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-6.75-1.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Z" fill={secondaryfill}/>
		<path d="M14.528,2.468c-.294-.292-.769-.29-1.061,.004L4.877,11.131s0,.001-.001,.002c-.564,.566-.876,1.317-.876,2.117s.312,1.555,.879,2.121c.566,.567,1.32,.879,2.121,.879s1.555-.312,2.121-.879c.567-.566,.879-1.32,.879-2.121s-.312-1.555-.879-2.121c-.385-.385-.87-.629-1.383-.752L14.532,3.528c.292-.294,.29-.769-.004-1.061Zm-6.028,10.782c0,.4-.156,.777-.439,1.061-.566,.566-1.555,.566-2.121,0-.283-.283-.439-.66-.439-1.061s.156-.777,.439-1.061,.66-.439,1.061-.439,.777,.156,1.061,.439,.439,.66,.439,1.061Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Scissors3;