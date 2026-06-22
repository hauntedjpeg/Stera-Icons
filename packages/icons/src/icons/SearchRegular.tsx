import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchRegularProps = Omit<IconBaseProps, 'children'>;

const SearchRegular = memo(
  forwardRef<SVGSVGElement, SearchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.75a8.25 8.25 0 0 1 6.65 13.13l3.73 3.74a1.25 1.25 0 0 1-1.76 1.76l-3.74-3.73A8.25 8.25 0 1 1 11 2.75m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegular.displayName = 'SearchRegular';

// Triple export pattern (lucide-react style)
export { SearchRegular, SearchRegular as SearchRegularIcon, SearchRegular as SiSearchRegular };
export default SearchRegular;
export type { SearchRegularProps };
