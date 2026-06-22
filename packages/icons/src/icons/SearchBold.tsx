import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchBoldProps = Omit<IconBaseProps, 'children'>;

const SearchBold = memo(
  forwardRef<SVGSVGElement, SearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.5a8.5 8.5 0 0 1 6.97 13.35l3.6 3.59a1.5 1.5 0 1 1-2.13 2.12l-3.59-3.59A8.5 8.5 0 1 1 11 2.5m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBold.displayName = 'SearchBold';

// Triple export pattern (lucide-react style)
export { SearchBold, SearchBold as SearchBoldIcon, SearchBold as SiSearchBold };
export default SearchBold;
export type { SearchBoldProps };
