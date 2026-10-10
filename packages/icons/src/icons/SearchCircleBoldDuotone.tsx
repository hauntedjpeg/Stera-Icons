import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.12 6.75c2.41 0 4.37 1.96 4.37 4.37q-.02 1.14-.53 2.07l1.67 1.68c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.68-1.67q-.93.52-2.07.53c-2.41 0-4.37-1.96-4.37-4.37s1.96-4.37 4.37-4.37m0 2c-1.31 0-2.37 1.06-2.37 2.37 0 1.3 1.06 2.37 2.37 2.37 1.3 0 2.37-1.06 2.37-2.37s-1.06-2.37-2.37-2.37" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleBoldDuotone.displayName = 'SearchCircleBoldDuotone';

// Triple export pattern
export { SearchCircleBoldDuotone, SearchCircleBoldDuotone as SearchCircleBoldDuotoneIcon, SearchCircleBoldDuotone as SiSearchCircleBoldDuotone };
export default SearchCircleBoldDuotone;
export type { SearchCircleBoldDuotoneProps };
