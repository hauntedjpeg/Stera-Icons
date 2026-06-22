import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillProps = Omit<IconBaseProps, 'children'>;

const SearchFill = memo(
  forwardRef<SVGSVGElement, SearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 0 1 7.3 13.57l3.44 3.44a1.75 1.75 0 1 1-2.48 2.48l-3.44-3.44A8.75 8.75 0 1 1 11 2.25m0 2.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFill.displayName = 'SearchFill';

// Triple export pattern (lucide-react style)
export { SearchFill, SearchFill as SearchFillIcon, SearchFill as SiSearchFill };
export default SearchFill;
export type { SearchFillProps };
