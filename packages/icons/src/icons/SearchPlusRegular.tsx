import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusRegularProps = Omit<IconBaseProps, 'children'>;

const SearchPlusRegular = memo(
  forwardRef<SVGSVGElement, SearchPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-plus" {...props}>
      <path d="M11 7.25c.41 0 .75.34.75.75v2.25H14a.75.75 0 0 1 0 1.5h-2.25V14a.75.75 0 0 1-1.5 0v-2.25H8a.75.75 0 0 1 0-1.5h2.25V8c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M11 2.25a8.75 8.75 0 0 1 6.85 14.19l3.86 3.85a1 1 0 1 1-1.42 1.42l-3.85-3.86A8.75 8.75 0 1 1 11 2.25m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusRegular.displayName = 'SearchPlusRegular';

// Triple export pattern (lucide-react style)
export { SearchPlusRegular, SearchPlusRegular as SearchPlusRegularIcon, SearchPlusRegular as SiSearchPlusRegular };
export default SearchPlusRegular;
export type { SearchPlusRegularProps };
