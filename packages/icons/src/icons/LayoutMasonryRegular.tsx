import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryRegular = memo(
  forwardRef<SVGSVGElement, LayoutMasonryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9 14.25a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2zm-4.25 1.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5H9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM19.25 11.75a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zM15 13.25a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h4.25a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM9 2.75a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-4.25 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5H9a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM19.25 2.75a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2zM15 4.25a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h4.25a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutMasonryRegular.displayName = 'LayoutMasonryRegular';

// Triple export pattern (lucide-react style)
export { LayoutMasonryRegular, LayoutMasonryRegular as LayoutMasonryRegularIcon, LayoutMasonryRegular as SiLayoutMasonryRegular };
export default LayoutMasonryRegular;
export type { LayoutMasonryRegularProps };
