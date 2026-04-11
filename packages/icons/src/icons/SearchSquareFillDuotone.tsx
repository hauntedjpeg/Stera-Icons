import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63a2.5 2.5 0 1 1 0 4.98 2.5 2.5 0 0 1 0-4.98" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1.38 4.25a4.24 4.24 0 1 0 2.1 7.93l1.73 1.73a1.12 1.12 0 1 0 1.6-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M11.12 6.88a4.24 4.24 0 0 1 3.69 6.33l1.73 1.74a1.12 1.12 0 1 1-1.59 1.6l-1.74-1.74q-.93.54-2.1.55a4.24 4.24 0 0 1 0-8.48m0 1.75a2.5 2.5 0 1 0 0 4.98 2.5 2.5 0 0 0 0-4.98" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFillDuotone.displayName = 'SearchSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchSquareFillDuotone, SearchSquareFillDuotone as SearchSquareFillDuotoneIcon, SearchSquareFillDuotone as SiSearchSquareFillDuotone };
export default SearchSquareFillDuotone;
export type { SearchSquareFillDuotoneProps };
