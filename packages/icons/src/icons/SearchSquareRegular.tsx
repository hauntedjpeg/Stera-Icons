import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareRegularProps = Omit<IconBaseProps, 'children'>;

const SearchSquareRegular = memo(
  forwardRef<SVGSVGElement, SearchSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 7c2.27 0 4.12 1.84 4.12 4.12q-.02 1.17-.59 2.12l1.8 1.8c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.81-1.81q-.95.57-2.12.59C8.84 15.24 7 13.39 7 11.12S8.84 7 11.12 7m0 1.5c-1.45 0-2.62 1.17-2.62 2.62 0 1.44 1.17 2.62 2.62 2.62 1.44 0 2.62-1.18 2.62-2.62S12.56 8.5 11.12 8.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareRegular.displayName = 'SearchSquareRegular';

// Triple export pattern
export { SearchSquareRegular, SearchSquareRegular as SearchSquareRegularIcon, SearchSquareRegular as SiSearchSquareRegular };
export default SearchSquareRegular;
export type { SearchSquareRegularProps };
