import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillProps = Omit<IconBaseProps, 'children'>;

const SearchFill = memo(
  forwardRef<SVGSVGElement, SearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 1.75a9.25 9.25 0 0 1 7.66 14.44l3.58 3.57a1.75 1.75 0 1 1-2.48 2.48l-3.57-3.58A9.25 9.25 0 1 1 11 1.75m0 2.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFill.displayName = 'SearchFill';

// Triple export pattern (lucide-react style)
export { SearchFill, SearchFill as SearchFillIcon, SearchFill as SiSearchFill };
export default SearchFill;
export type { SearchFillProps };
