import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-plus-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M11 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" opacity={.4} />
        <path d="M22.06 19.94a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73a9 9 0 0 0 2.12-2.12zM11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SearchPlusBoldDuotone.displayName = 'SearchPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { SearchPlusBoldDuotone, SearchPlusBoldDuotone as SearchPlusBoldDuotoneIcon, SearchPlusBoldDuotone as SiSearchPlusBoldDuotone };
export default SearchPlusBoldDuotone;
export type { SearchPlusBoldDuotoneProps };
