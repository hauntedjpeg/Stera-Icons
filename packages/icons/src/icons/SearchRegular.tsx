import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchRegularProps = Omit<IconBaseProps, 'children'>;

const SearchRegular = memo(
  forwardRef<SVGSVGElement, SearchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.75c4.56 0 8.25 3.7 8.25 8.25 0 1.83-.6 3.51-1.6 4.88l3.73 3.74c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-3.74-3.73c-1.37 1-3.05 1.6-4.88 1.6-4.56 0-8.25-3.7-8.25-8.25S6.45 2.75 11 2.75m0 1.5c-3.73 0-6.75 3.02-6.75 6.75s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75S14.73 4.25 11 4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegular.displayName = 'SearchRegular';

// Triple export pattern
export { SearchRegular, SearchRegular as SearchRegularIcon, SearchRegular as SiSearchRegular };
export default SearchRegular;
export type { SearchRegularProps };
