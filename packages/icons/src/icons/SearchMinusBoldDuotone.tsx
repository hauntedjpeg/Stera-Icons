import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.56 19.44c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.59-3.59q1.25-.86 2.12-2.12zM14 10c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M11 2.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S6.3 2.5 11 2.5m0 2c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

SearchMinusBoldDuotone.displayName = 'SearchMinusBoldDuotone';

// Triple export pattern
export { SearchMinusBoldDuotone, SearchMinusBoldDuotone as SearchMinusBoldDuotoneIcon, SearchMinusBoldDuotone as SiSearchMinusBoldDuotone };
export default SearchMinusBoldDuotone;
export type { SearchMinusBoldDuotoneProps };
