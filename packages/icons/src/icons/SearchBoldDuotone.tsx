import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.56 19.44c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.59-3.59q1.25-.86 2.12-2.12z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S6.3 2.5 11 2.5m0 2c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBoldDuotone.displayName = 'SearchBoldDuotone';

// Triple export pattern
export { SearchBoldDuotone, SearchBoldDuotone as SearchBoldDuotoneIcon, SearchBoldDuotone as SiSearchBoldDuotone };
export default SearchBoldDuotone;
export type { SearchBoldDuotoneProps };
