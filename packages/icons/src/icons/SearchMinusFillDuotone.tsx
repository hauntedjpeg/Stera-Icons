import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.47 19.53a1.38 1.38 0 0 1-1.94 1.94l-3.66-3.66Q17 17 17.8 15.87zM14 10.13a.88.88 0 0 1 0 1.74H8a.88.88 0 0 1 0-1.74z" />
        <path fillRule="evenodd" d="M11 2.63a8.37 8.37 0 1 1 0 16.74 8.37 8.37 0 0 1 0-16.74m-3 7.5a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

SearchMinusFillDuotone.displayName = 'SearchMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchMinusFillDuotone, SearchMinusFillDuotone as SearchMinusFillDuotoneIcon, SearchMinusFillDuotone as SiSearchMinusFillDuotone };
export default SearchMinusFillDuotone;
export type { SearchMinusFillDuotoneProps };
