import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeRegularProps = Omit<IconBaseProps, 'children'>;

const TreeRegular = memo(
  forwardRef<SVGSVGElement, TreeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25q.36 0 .6.29l3.88 5c.18.23.2.53.08.79s-.38.42-.67.42h-.8l2.95 3.79c.17.23.2.53.08.79s-.39.42-.68.42h-.8l2.33 2.98c.63.82.05 2.02-1 2.02h-5.22V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H6.02c-1.04 0-1.62-1.2-.98-2.02l2.31-2.98h-.8c-.28 0-.54-.16-.67-.42-.12-.26-.1-.56.08-.8l2.95-3.78h-.8c-.28 0-.55-.16-.67-.42-.13-.26-.1-.56.08-.8l3.89-5 .06-.06q.22-.21.53-.22m-2.36 5h.8q.47.02.68.42c.12.26.1.56-.08.8l-2.95 3.78h.8c.29 0 .55.16.67.42.13.26.1.56-.08.8l-2.95 3.78h10.94l-2.95-3.79c-.18-.23-.2-.53-.08-.79s.39-.42.67-.42h.8l-2.95-3.79c-.17-.23-.2-.53-.08-.79s.39-.42.68-.42h.8L12 4.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeRegular.displayName = 'TreeRegular';

// Triple export pattern
export { TreeRegular, TreeRegular as TreeRegularIcon, TreeRegular as SiTreeRegular };
export default TreeRegular;
export type { TreeRegularProps };
