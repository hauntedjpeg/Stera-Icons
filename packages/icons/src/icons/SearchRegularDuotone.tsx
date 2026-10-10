import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.38 19.62c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-3.74-3.73q1.02-.76 1.77-1.77z" opacity={.4} />
        <path fillRule="evenodd" d="M11 2.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25S6.45 2.75 11 2.75m0 1.5c-3.73 0-6.75 3.02-6.75 6.75s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75S14.73 4.25 11 4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegularDuotone.displayName = 'SearchRegularDuotone';

// Triple export pattern
export { SearchRegularDuotone, SearchRegularDuotone as SearchRegularDuotoneIcon, SearchRegularDuotone as SiSearchRegularDuotone };
export default SearchRegularDuotone;
export type { SearchRegularDuotoneProps };
