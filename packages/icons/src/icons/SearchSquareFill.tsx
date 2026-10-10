import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFill = memo(
  forwardRef<SVGSVGElement, SearchSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63c1.38 0 2.5 1.11 2.5 2.49s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-2.98 4.25c-2.35 0-4.24 1.9-4.24 4.24s1.9 4.24 4.24 4.24q1.15-.01 2.1-.55l1.73 1.73c.44.44 1.16.44 1.6 0 .43-.43.43-1.15 0-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFill.displayName = 'SearchSquareFill';

// Triple export pattern
export { SearchSquareFill, SearchSquareFill as SearchSquareFillIcon, SearchSquareFill as SiSearchSquareFill };
export default SearchSquareFill;
export type { SearchSquareFillProps };
