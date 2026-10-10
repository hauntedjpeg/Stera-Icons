import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillProps = Omit<IconBaseProps, 'children'>;

const SearchFill = memo(
  forwardRef<SVGSVGElement, SearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.25c4.83 0 8.75 3.92 8.75 8.75 0 1.78-.54 3.44-1.45 4.82l3.44 3.44c.68.69.68 1.8 0 2.48s-1.8.68-2.48 0l-3.44-3.44c-1.38.91-3.04 1.45-4.82 1.45-4.83 0-8.75-3.92-8.75-8.75S6.17 2.25 11 2.25m0 2.5c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFill.displayName = 'SearchFill';

// Triple export pattern
export { SearchFill, SearchFill as SearchFillIcon, SearchFill as SiSearchFill };
export default SearchFill;
export type { SearchFillProps };
