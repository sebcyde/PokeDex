import React from 'react';
import { Select, Icon, Collapsible, CollapsibleItem } from 'react-materialize';

type Props = {};

function OptionDropdown({}: Props) {
	return (
		<div>
			<Collapsible accordion>
				<CollapsibleItem
					expanded={false}
					header="Better safe than sorry. That's my motto."
					icon={<Icon>filter_drama</Icon>}
					node="div"
				>
					Better safe than sorry. That's my motto.
				</CollapsibleItem>
				<CollapsibleItem
					expanded={false}
					header="Yeah, you do seem to have a little 'shit creek' action going."
					icon={<Icon>place</Icon>}
					node="div"
				>
					Yeah, you do seem to have a little 'shit creek' action going.
				</CollapsibleItem>
				<CollapsibleItem
					expanded={false}
					header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
					icon={<Icon>whatshot</Icon>}
					node="div"
				>
					You know, FYI, you can buy a paddle. Did you not plan for this
					contingency?
				</CollapsibleItem>
			</Collapsible>
			<Select
				icon={<Icon>cloud</Icon>}
				id="Select-15"
				multiple={false}
				options={{
					classes: '',
					dropdownOptions: {
						alignment: 'left',
						autoTrigger: true,
						closeOnClick: true,
						constrainWidth: true,
						coverTrigger: true,
						hover: false,
						inDuration: 150,
						onCloseEnd: undefined,
						onCloseStart: undefined,
						onOpenEnd: undefined,
						onOpenStart: undefined,
						outDuration: 250,
					},
				}}
				value=""
			>
				<option value="ID1">ID Low to High</option>
				<option value="ID2">ID High to Low</option>
				<option value="A-Z">A-Z</option>
				<option value="Z-A">Z-A</option>
			</Select>
		</div>
	);
}

export default OptionDropdown;
