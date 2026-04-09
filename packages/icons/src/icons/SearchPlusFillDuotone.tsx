import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-plus-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11 2.13a8.88 8.88 0 1 1 0 17.75 8.88 8.88 0 0 1 0-17.75m0 5c-.48 0-.87.39-.87.87v2.13H8a.88.88 0 0 0 0 1.74h2.13V14a.88.88 0 0 0 1.74 0v-2.12H14a.88.88 0 0 0 0-1.76h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M22.06 19.94a1.5 1.5 0 1 1-2.12 2.12l-3.82-3.82a9 9 0 0 0 2.12-2.12zM11 7.13c.48 0 .88.39.88.87v2.13H14a.88.88 0 0 1 0 1.74h-2.12V14a.88.88 0 0 1-1.76 0v-2.12H8a.88.88 0 0 1 0-1.76h2.13V8c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SearchPlusFillDuotone.displayName = 'SearchPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchPlusFillDuotone, SearchPlusFillDuotone as SearchPlusFillDuotoneIcon, SearchPlusFillDuotone as SiSearchPlusFillDuotone };
export default SearchPlusFillDuotone;
export type { SearchPlusFillDuotoneProps };
