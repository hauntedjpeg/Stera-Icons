import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusBoldProps = Omit<IconBaseProps, 'children'>;

const SearchPlusBold = memo(
  forwardRef<SVGSVGElement, SearchPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 7c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8c-.55 0-1-.45-1-1s.45-1 1-1h2V8c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M11 2c4.97 0 9 4.03 9 9 0 1.94-.62 3.74-1.67 5.21l3.73 3.73c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.73-3.73C14.74 19.38 12.94 20 11 20c-4.97 0-9-4.03-9-9s4.03-9 9-9m0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchPlusBold.displayName = 'SearchPlusBold';

// Triple export pattern
export { SearchPlusBold, SearchPlusBold as SearchPlusBoldIcon, SearchPlusBold as SiSearchPlusBold };
export default SearchPlusBold;
export type { SearchPlusBoldProps };
