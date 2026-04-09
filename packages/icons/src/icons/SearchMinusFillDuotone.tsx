import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-minus-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11 2.13a8.88 8.88 0 1 1 0 17.75 8.88 8.88 0 0 1 0-17.75m-3 8a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M14 10.13a.88.88 0 0 1 0 1.74H8a.88.88 0 0 1 0-1.74zM22.06 19.94a1.5 1.5 0 1 1-2.12 2.12l-3.82-3.82a9 9 0 0 0 2.12-2.12z" />
    </IconBase>
  ))
);

SearchMinusFillDuotone.displayName = 'SearchMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchMinusFillDuotone, SearchMinusFillDuotone as SearchMinusFillDuotoneIcon, SearchMinusFillDuotone as SiSearchMinusFillDuotone };
export default SearchMinusFillDuotone;
export type { SearchMinusFillDuotoneProps };
