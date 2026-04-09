import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFill = memo(
  forwardRef<SVGSVGElement, SearchCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-fill" {...props}>
      <path d="M11.12 8.63a2.5 2.5 0 1 1 0 4.98 2.5 2.5 0 0 1 0-4.98" />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.88 4.75a4.24 4.24 0 1 0 2.1 7.93l1.73 1.73a1.12 1.12 0 1 0 1.6-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFill.displayName = 'SearchCircleFill';

// Triple export pattern (lucide-react style)
export { SearchCircleFill, SearchCircleFill as SearchCircleFillIcon, SearchCircleFill as SiSearchCircleFill };
export default SearchCircleFill;
export type { SearchCircleFillProps };
