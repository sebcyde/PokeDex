import React, { useEffect, useState } from 'react';
import { Pagination, Icon } from 'react-materialize';

type Props = { pages: number };

function PokeCardPagination({ pages }: Props) {
	return (
		<div>
			<Pagination
				activePage={1}
				items={pages}
				leftBtn={<Icon>chevron_left</Icon>}
				rightBtn={<Icon>chevron_right</Icon>}
			/>
		</div>
	);
}

export default PokeCardPagination;
