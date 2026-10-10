import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusBoldProps = Omit<IconBaseProps, 'children'>;

const SearchMinusBold = memo(
  forwardRef<SVGSVGElement, SearchMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 10c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M11 2.5c4.7 0 8.5 3.8 8.5 8.5 0 1.8-.57 3.48-1.53 4.85l3.6 3.59c.58.59.58 1.53 0 2.12-.6.59-1.54.59-2.13 0l-3.59-3.59c-1.37.96-3.04 1.53-4.85 1.53-4.7 0-8.5-3.8-8.5-8.5S6.3 2.5 11 2.5m0 2c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusBold.displayName = 'SearchMinusBold';

// Triple export pattern
export { SearchMinusBold, SearchMinusBold as SearchMinusBoldIcon, SearchMinusBold as SiSearchMinusBold };
export default SearchMinusBold;
export type { SearchMinusBoldProps };
