import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFill = memo(
  forwardRef<SVGSVGElement, SearchSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63a2.5 2.5 0 1 1 0 4.98 2.5 2.5 0 0 1 0-4.98" />
        <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-2.98 4.25a4.24 4.24 0 1 0 2.1 7.93l1.73 1.73a1.12 1.12 0 1 0 1.6-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFill.displayName = 'SearchSquareFill';

// Triple export pattern (lucide-react style)
export { SearchSquareFill, SearchSquareFill as SearchSquareFillIcon, SearchSquareFill as SiSearchSquareFill };
export default SearchSquareFill;
export type { SearchSquareFillProps };
