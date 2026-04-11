import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFill = memo(
  forwardRef<SVGSVGElement, SearchMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.13a8.88 8.88 0 0 1 7.24 14l3.82 3.81a1.5 1.5 0 1 1-2.12 2.12l-3.82-3.82A8.88 8.88 0 1 1 11 2.12m-3 8a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusFill.displayName = 'SearchMinusFill';

// Triple export pattern (lucide-react style)
export { SearchMinusFill, SearchMinusFill as SearchMinusFillIcon, SearchMinusFill as SiSearchMinusFill };
export default SearchMinusFill;
export type { SearchMinusFillProps };
