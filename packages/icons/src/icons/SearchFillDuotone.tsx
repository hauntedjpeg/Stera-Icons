import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.74 19.26a1.75 1.75 0 1 1-2.48 2.48l-3.44-3.44a9 9 0 0 0 2.48-2.48z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 2.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFillDuotone.displayName = 'SearchFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchFillDuotone, SearchFillDuotone as SearchFillDuotoneIcon, SearchFillDuotone as SiSearchFillDuotone };
export default SearchFillDuotone;
export type { SearchFillDuotoneProps };
