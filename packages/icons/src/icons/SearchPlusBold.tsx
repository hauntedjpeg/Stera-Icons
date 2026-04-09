import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusBoldProps = Omit<IconBaseProps, 'children'>;

const SearchPlusBold = memo(
  forwardRef<SVGSVGElement, SearchPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-plus-bold" {...props}>
      <path d="M11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M11 2a9 9 0 0 1 7.33 14.21l3.73 3.73a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73A9 9 0 1 1 11 2m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusBold.displayName = 'SearchPlusBold';

// Triple export pattern (lucide-react style)
export { SearchPlusBold, SearchPlusBold as SearchPlusBoldIcon, SearchPlusBold as SiSearchPlusBold };
export default SearchPlusBold;
export type { SearchPlusBoldProps };
