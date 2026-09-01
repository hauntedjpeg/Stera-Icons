import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63a2.5 2.5 0 1 1 0 4.98 2.5 2.5 0 0 1 0-4.98" opacity={0.4} />
        <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-2.98 4.25a4.24 4.24 0 1 0 2.1 7.93l1.73 1.73a1.12 1.12 0 1 0 1.6-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M11.12 6.88a4.24 4.24 0 0 1 3.69 6.33l1.73 1.74a1.12 1.12 0 1 1-1.59 1.6l-1.74-1.74q-.93.54-2.1.55a4.24 4.24 0 0 1 0-8.48m0 1.75a2.5 2.5 0 1 0 0 4.98 2.5 2.5 0 0 0 0-4.98" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFillDuotone.displayName = 'SearchSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchSquareFillDuotone, SearchSquareFillDuotone as SearchSquareFillDuotoneIcon, SearchSquareFillDuotone as SiSearchSquareFillDuotone };
export default SearchSquareFillDuotone;
export type { SearchSquareFillDuotoneProps };
