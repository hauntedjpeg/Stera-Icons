import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22.24 19.76a1.75 1.75 0 1 1-2.48 2.48l-3.57-3.58a9 9 0 0 0 2.47-2.47z" opacity={.4} />
        <path fillRule="evenodd" d="M11 1.75a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m0 2.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFillDuotone.displayName = 'SearchFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchFillDuotone, SearchFillDuotone as SearchFillDuotoneIcon, SearchFillDuotone as SiSearchFillDuotone };
export default SearchFillDuotone;
export type { SearchFillDuotoneProps };
