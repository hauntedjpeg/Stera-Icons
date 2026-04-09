import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-minus-duotone" {...props}>
      <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" opacity={.4} />
        <path d="M14 10.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM21.7 20.3a1 1 0 1 1-1.4 1.4l-3.86-3.85q.79-.62 1.41-1.41z" />
    </IconBase>
  ))
);

SearchMinusRegularDuotone.displayName = 'SearchMinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchMinusRegularDuotone, SearchMinusRegularDuotone as SearchMinusRegularDuotoneIcon, SearchMinusRegularDuotone as SiSearchMinusRegularDuotone };
export default SearchMinusRegularDuotone;
export type { SearchMinusRegularDuotoneProps };
