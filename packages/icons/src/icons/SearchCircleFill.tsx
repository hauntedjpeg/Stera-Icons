import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFill = memo(
  forwardRef<SVGSVGElement, SearchCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63c1.38 0 2.5 1.11 2.5 2.49s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.88 4.75c-2.35 0-4.24 1.9-4.24 4.24s1.9 4.24 4.24 4.24q1.15-.01 2.1-.55l1.73 1.73c.44.44 1.16.44 1.6 0 .43-.43.43-1.15 0-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFill.displayName = 'SearchCircleFill';

// Triple export pattern
export { SearchCircleFill, SearchCircleFill as SearchCircleFillIcon, SearchCircleFill as SiSearchCircleFill };
export default SearchCircleFill;
export type { SearchCircleFillProps };
