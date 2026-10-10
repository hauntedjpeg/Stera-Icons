import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusRegularProps = Omit<IconBaseProps, 'children'>;

const SearchPlusRegular = memo(
  forwardRef<SVGSVGElement, SearchPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 7.25c.41 0 .75.34.75.75v2.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V8c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M11 2.25c4.83 0 8.75 3.92 8.75 8.75 0 2.06-.71 3.94-1.9 5.44l3.86 3.85c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-3.85-3.86c-1.5 1.19-3.38 1.9-5.44 1.9-4.83 0-8.75-3.92-8.75-8.75S6.17 2.25 11 2.25m0 1.5C7 3.75 3.75 7 3.75 11S7 18.25 11 18.25 18.25 15 18.25 11 15 3.75 11 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusRegular.displayName = 'SearchPlusRegular';

// Triple export pattern
export { SearchPlusRegular, SearchPlusRegular as SearchPlusRegularIcon, SearchPlusRegular as SiSearchPlusRegular };
export default SearchPlusRegular;
export type { SearchPlusRegularProps };
