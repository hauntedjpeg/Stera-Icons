import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.74 19.26c.68.69.68 1.8 0 2.48s-1.8.68-2.48 0l-3.44-3.44q1.5-1 2.48-2.48z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.25c4.83 0 8.75 3.92 8.75 8.75s-3.92 8.75-8.75 8.75S2.25 15.83 2.25 11 6.17 2.25 11 2.25m0 2.5c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFillDuotone.displayName = 'SearchFillDuotone';

// Triple export pattern
export { SearchFillDuotone, SearchFillDuotone as SearchFillDuotoneIcon, SearchFillDuotone as SiSearchFillDuotone };
export default SearchFillDuotone;
export type { SearchFillDuotoneProps };
