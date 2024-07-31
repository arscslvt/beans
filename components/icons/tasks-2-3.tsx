import React from 'react';
import IconProps from "@/types/icon.types"

function Tasks23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25,4.5H7.25c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75h7c1.517,0,2.75-1.233,2.75-2.75V7.25c0-1.517-1.233-2.75-2.75-2.75Zm-.398,4.452l-3.397,4.5c-.128,.169-.322,.276-.534,.295-.021,.002-.043,.003-.065,.003-.189,0-.372-.071-.511-.201l-1.609-1.5c-.303-.283-.32-.757-.038-1.06,.283-.303,.758-.32,1.06-.038l1.001,.933,2.896-3.836c.25-.33,.719-.395,1.051-.146,.331,.25,.396,.72,.146,1.051Z" fill={fill}/>
		<path d="M2.8,12.748c-.365,0-.686-.268-.741-.64L1.03,5.184c-.223-1.5,.815-2.901,2.315-3.125l6.924-1.029c1.269-.186,2.478,.507,2.954,1.689,.155,.384-.031,.821-.415,.976-.388,.155-.822-.031-.976-.415-.217-.537-.769-.852-1.343-.767L3.566,3.543c-.682,.102-1.154,.739-1.053,1.42l1.029,6.924c.061,.41-.222,.792-.631,.852-.038,.006-.075,.008-.111,.008Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Tasks23;