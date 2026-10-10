import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.13c4.9 0 8.88 3.97 8.88 8.87 0 1.9-.61 3.68-1.64 5.12q-.88 1.24-2.12 2.12c-1.44 1.03-3.21 1.64-5.12 1.64-4.9 0-8.87-3.98-8.87-8.88S6.1 2.13 11 2.13m0 5c-.48 0-.87.39-.87.87v2.13H8c-.48 0-.87.39-.87.87s.39.88.87.88h2.13V14c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H14c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M22.06 19.94c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.82-3.82q1.24-.88 2.12-2.12zM11 7.13c.48 0 .88.39.88.87v2.13H14c.48 0 .88.39.88.87s-.4.88-.88.88h-2.12V14c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2.12H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.13V8c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SearchPlusFillDuotone.displayName = 'SearchPlusFillDuotone';

// Triple export pattern
export { SearchPlusFillDuotone, SearchPlusFillDuotone as SearchPlusFillDuotoneIcon, SearchPlusFillDuotone as SiSearchPlusFillDuotone };
export default SearchPlusFillDuotone;
export type { SearchPlusFillDuotoneProps };
