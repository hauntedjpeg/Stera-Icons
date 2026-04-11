import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" opacity={.4} />
        <path d="M21.7 20.3a1 1 0 1 1-1.4 1.4l-3.86-3.85q.79-.62 1.41-1.41zM11 7.25c.41 0 .75.34.75.75v2.25H14a.75.75 0 0 1 0 1.5h-2.25V14a.75.75 0 0 1-1.5 0v-2.25H8a.75.75 0 0 1 0-1.5h2.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SearchPlusRegularDuotone.displayName = 'SearchPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchPlusRegularDuotone, SearchPlusRegularDuotone as SearchPlusRegularDuotoneIcon, SearchPlusRegularDuotone as SiSearchPlusRegularDuotone };
export default SearchPlusRegularDuotone;
export type { SearchPlusRegularDuotoneProps };
