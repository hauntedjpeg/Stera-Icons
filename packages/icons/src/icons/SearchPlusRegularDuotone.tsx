import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.25c4.83 0 8.75 3.92 8.75 8.75s-3.92 8.75-8.75 8.75S2.25 15.83 2.25 11 6.17 2.25 11 2.25m0 1.5C7 3.75 3.75 7 3.75 11S7 18.25 11 18.25 18.25 15 18.25 11 15 3.75 11 3.75" clipRule="evenodd" opacity={.4} />
        <path d="M21.7 20.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-3.86-3.85q.79-.62 1.41-1.41zM11 7.25c.41 0 .75.34.75.75v2.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SearchPlusRegularDuotone.displayName = 'SearchPlusRegularDuotone';

// Triple export pattern
export { SearchPlusRegularDuotone, SearchPlusRegularDuotone as SearchPlusRegularDuotoneIcon, SearchPlusRegularDuotone as SiSearchPlusRegularDuotone };
export default SearchPlusRegularDuotone;
export type { SearchPlusRegularDuotoneProps };
