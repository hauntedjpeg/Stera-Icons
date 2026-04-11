import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusBoldProps = Omit<IconBaseProps, 'children'>;

const SearchMinusBold = memo(
  forwardRef<SVGSVGElement, SearchMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 10a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M11 2a9 9 0 0 1 7.33 14.21l3.73 3.73a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73A9 9 0 1 1 11 2m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusBold.displayName = 'SearchMinusBold';

// Triple export pattern (lucide-react style)
export { SearchMinusBold, SearchMinusBold as SearchMinusBoldIcon, SearchMinusBold as SiSearchMinusBold };
export default SearchMinusBold;
export type { SearchMinusBoldProps };
