import React from 'react';
import IconProps from "@/types/icon.types"

function EyeOpen3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.008,6.083l.881-1.441c.216-.354,.105-.815-.248-1.031-.354-.215-.815-.105-1.031,.248l-.907,1.482c-.678-.331-1.388-.588-2.124-.769l.333-1.655c.082-.406-.182-.802-.587-.883-.405-.078-.802,.181-.883,.587l-.339,1.685c-.364-.037-.732-.057-1.103-.057s-.739,.02-1.103,.057l-.339-1.685c-.082-.406-.48-.666-.883-.587-.406,.082-.669,.477-.587,.883l.333,1.655c-.736,.181-1.446,.438-2.124,.769l-.907-1.482c-.215-.353-.677-.463-1.031-.248-.353,.216-.464,.678-.248,1.031l.881,1.441c-.594,.402-1.154,.867-1.668,1.392-.29,.295-.285,.771,.011,1.061,.295,.29,.77,.285,1.061-.011,1.754-1.789,4.1-2.774,6.605-2.774s4.851,.985,6.605,2.774c.147,.15,.341,.225,.536,.225,.189,0,.379-.071,.525-.214,.296-.29,.301-.765,.011-1.061-.515-.525-1.074-.99-1.668-1.392Z" fill={fill}/>
		<circle cx="9" cy="10.5" fill={secondaryfill} r="3.5"/>
	</g>
</svg>
	);
}

export default EyeOpen3;