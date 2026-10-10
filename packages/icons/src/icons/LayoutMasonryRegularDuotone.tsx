import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutMasonryRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.25c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zm-4.25 1.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5H9c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zM19.25 2.75c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zM15 4.25c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h4.25c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M19.25 11.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zM15 13.25c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5h4.25c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5zM9 2.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zm-4.25 1.5c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5H9c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutMasonryRegularDuotone.displayName = 'LayoutMasonryRegularDuotone';

// Triple export pattern
export { LayoutMasonryRegularDuotone, LayoutMasonryRegularDuotone as LayoutMasonryRegularDuotoneIcon, LayoutMasonryRegularDuotone as SiLayoutMasonryRegularDuotone };
export default LayoutMasonryRegularDuotone;
export type { LayoutMasonryRegularDuotoneProps };
