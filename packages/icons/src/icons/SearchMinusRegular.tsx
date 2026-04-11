import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusRegularProps = Omit<IconBaseProps, 'children'>;

const SearchMinusRegular = memo(
  forwardRef<SVGSVGElement, SearchMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 10.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 0 1 6.85 14.19l3.86 3.85a1 1 0 1 1-1.42 1.42l-3.85-3.86A8.75 8.75 0 1 1 11 2.25m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusRegular.displayName = 'SearchMinusRegular';

// Triple export pattern (lucide-react style)
export { SearchMinusRegular, SearchMinusRegular as SearchMinusRegularIcon, SearchMinusRegular as SiSearchMinusRegular };
export default SearchMinusRegular;
export type { SearchMinusRegularProps };
