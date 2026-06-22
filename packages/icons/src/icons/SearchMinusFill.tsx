import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFill = memo(
  forwardRef<SVGSVGElement, SearchMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.63a8.37 8.37 0 0 1 6.81 13.24l3.66 3.66a1.38 1.38 0 0 1-1.94 1.94l-3.66-3.66A8.37 8.37 0 1 1 11 2.62m-3 7.5a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusFill.displayName = 'SearchMinusFill';

// Triple export pattern (lucide-react style)
export { SearchMinusFill, SearchMinusFill as SearchMinusFillIcon, SearchMinusFill as SiSearchMinusFill };
export default SearchMinusFill;
export type { SearchMinusFillProps };
