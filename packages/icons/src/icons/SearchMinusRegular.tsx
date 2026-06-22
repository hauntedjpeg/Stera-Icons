import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusRegularProps = Omit<IconBaseProps, 'children'>;

const SearchMinusRegular = memo(
  forwardRef<SVGSVGElement, SearchMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 10.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M11 2.75a8.25 8.25 0 0 1 6.65 13.13l3.73 3.74a1.25 1.25 0 0 1-1.76 1.76l-3.74-3.73A8.25 8.25 0 1 1 11 2.75m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusRegular.displayName = 'SearchMinusRegular';

// Triple export pattern (lucide-react style)
export { SearchMinusRegular, SearchMinusRegular as SearchMinusRegularIcon, SearchMinusRegular as SiSearchMinusRegular };
export default SearchMinusRegular;
export type { SearchMinusRegularProps };
