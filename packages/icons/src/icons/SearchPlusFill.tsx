import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusFillProps = Omit<IconBaseProps, 'children'>;

const SearchPlusFill = memo(
  forwardRef<SVGSVGElement, SearchPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-plus-fill" {...props}>
      <path fillRule="evenodd" d="M11 2.13a8.88 8.88 0 0 1 7.24 14l3.82 3.81a1.5 1.5 0 1 1-2.12 2.12l-3.82-3.82A8.88 8.88 0 1 1 11 2.12m0 5c-.48 0-.87.39-.87.87v2.13H8a.88.88 0 0 0 0 1.74h2.13V14a.88.88 0 0 0 1.74 0v-2.12H14a.88.88 0 0 0 0-1.76h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusFill.displayName = 'SearchPlusFill';

// Triple export pattern (lucide-react style)
export { SearchPlusFill, SearchPlusFill as SearchPlusFillIcon, SearchPlusFill as SiSearchPlusFill };
export default SearchPlusFill;
export type { SearchPlusFillProps };
