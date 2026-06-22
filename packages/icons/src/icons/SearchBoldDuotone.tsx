import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.56 19.44a1.5 1.5 0 1 1-2.12 2.12l-3.59-3.59a9 9 0 0 0 2.12-2.12z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBoldDuotone.displayName = 'SearchBoldDuotone';

// Triple export pattern (lucide-react style)
export { SearchBoldDuotone, SearchBoldDuotone as SearchBoldDuotoneIcon, SearchBoldDuotone as SiSearchBoldDuotone };
export default SearchBoldDuotone;
export type { SearchBoldDuotoneProps };
