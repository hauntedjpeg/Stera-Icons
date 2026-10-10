import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.47 19.53c.54.53.54 1.4 0 1.94-.53.54-1.4.54-1.94 0l-3.66-3.66Q17 17 17.8 15.87zM14 10.13c.48 0 .88.39.88.87s-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
        <path fillRule="evenodd" d="M11 2.63c4.63 0 8.38 3.74 8.38 8.37s-3.75 8.38-8.38 8.38S2.63 15.63 2.63 11 6.37 2.63 11 2.63m-3 7.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

SearchMinusFillDuotone.displayName = 'SearchMinusFillDuotone';

// Triple export pattern
export { SearchMinusFillDuotone, SearchMinusFillDuotone as SearchMinusFillDuotoneIcon, SearchMinusFillDuotone as SiSearchMinusFillDuotone };
export default SearchMinusFillDuotone;
export type { SearchMinusFillDuotoneProps };
