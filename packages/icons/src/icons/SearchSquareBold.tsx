import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareBoldProps = Omit<IconBaseProps, 'children'>;

const SearchSquareBold = memo(
  forwardRef<SVGSVGElement, SearchSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 6.75c2.41 0 4.37 1.96 4.37 4.37q-.02 1.14-.53 2.07l1.67 1.68c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.68-1.67q-.93.52-2.07.53c-2.41 0-4.37-1.96-4.37-4.37s1.96-4.37 4.37-4.37m0 2c-1.31 0-2.37 1.06-2.37 2.37 0 1.3 1.06 2.37 2.37 2.37 1.3 0 2.37-1.06 2.37-2.37s-1.06-2.37-2.37-2.37" clipRule="evenodd" />
        <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.9c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareBold.displayName = 'SearchSquareBold';

// Triple export pattern
export { SearchSquareBold, SearchSquareBold as SearchSquareBoldIcon, SearchSquareBold as SiSearchSquareBold };
export default SearchSquareBold;
export type { SearchSquareBoldProps };
