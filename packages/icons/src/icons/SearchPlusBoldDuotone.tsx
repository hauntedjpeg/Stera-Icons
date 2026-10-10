import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9m0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7" clipRule="evenodd" opacity={.4} />
        <path d="M22.06 19.94c.59.59.59 1.53 0 2.12s-1.53.59-2.12 0l-3.73-3.73q1.24-.88 2.12-2.12zM11 7c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8c-.55 0-1-.45-1-1s.45-1 1-1h2V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

SearchPlusBoldDuotone.displayName = 'SearchPlusBoldDuotone';

// Triple export pattern
export { SearchPlusBoldDuotone, SearchPlusBoldDuotone as SearchPlusBoldDuotoneIcon, SearchPlusBoldDuotone as SiSearchPlusBoldDuotone };
export default SearchPlusBoldDuotone;
export type { SearchPlusBoldDuotoneProps };
