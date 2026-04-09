import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-minus-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M11 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" opacity={.4} />
        <path d="M14 10a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22.06 19.94a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73a9 9 0 0 0 2.12-2.12z" />
    </IconBase>
  ))
);

SearchMinusBoldDuotone.displayName = 'SearchMinusBoldDuotone';

// Triple export pattern (lucide-react style)
export { SearchMinusBoldDuotone, SearchMinusBoldDuotone as SearchMinusBoldDuotoneIcon, SearchMinusBoldDuotone as SiSearchMinusBoldDuotone };
export default SearchMinusBoldDuotone;
export type { SearchMinusBoldDuotoneProps };
