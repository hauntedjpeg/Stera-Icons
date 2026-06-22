import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.38 19.62a1.25 1.25 0 0 1-1.76 1.76l-3.74-3.73q1.02-.76 1.77-1.77z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.75a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegularDuotone.displayName = 'SearchRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchRegularDuotone, SearchRegularDuotone as SearchRegularDuotoneIcon, SearchRegularDuotone as SiSearchRegularDuotone };
export default SearchRegularDuotone;
export type { SearchRegularDuotoneProps };
