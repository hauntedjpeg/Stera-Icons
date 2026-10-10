import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusFillProps = Omit<IconBaseProps, 'children'>;

const SearchPlusFill = memo(
  forwardRef<SVGSVGElement, SearchPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.13c4.9 0 8.88 3.97 8.88 8.87 0 1.9-.61 3.68-1.64 5.12l3.82 3.82c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.82-3.82c-1.44 1.03-3.21 1.64-5.12 1.64-4.9 0-8.87-3.98-8.87-8.88S6.1 2.13 11 2.13m0 5c-.48 0-.87.39-.87.87v2.13H8c-.48 0-.87.39-.87.87s.39.88.87.88h2.13V14c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H14c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusFill.displayName = 'SearchPlusFill';

// Triple export pattern
export { SearchPlusFill, SearchPlusFill as SearchPlusFillIcon, SearchPlusFill as SiSearchPlusFill };
export default SearchPlusFill;
export type { SearchPlusFillProps };
