import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.38 19.62a1.25 1.25 0 0 1-1.76 1.76l-3.74-3.73q1.02-.76 1.77-1.77zM14 10.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M11 2.75a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

SearchMinusRegularDuotone.displayName = 'SearchMinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchMinusRegularDuotone, SearchMinusRegularDuotone as SearchMinusRegularDuotoneIcon, SearchMinusRegularDuotone as SiSearchMinusRegularDuotone };
export default SearchMinusRegularDuotone;
export type { SearchMinusRegularDuotoneProps };
