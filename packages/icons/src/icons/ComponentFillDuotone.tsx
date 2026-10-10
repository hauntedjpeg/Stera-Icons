import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ComponentFillDuotone = memo(
  forwardRef<SVGSVGElement, ComponentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.71 8.24c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8zM16.62 8.32c.48-.48 1.28-.48 1.76 0l2.8 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76z" opacity={0.4} />
        <path d="M11.21 13.74c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8zM11.21 2.74c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8z" />
    </IconBase>
  ))
);

ComponentFillDuotone.displayName = 'ComponentFillDuotone';

// Triple export pattern
export { ComponentFillDuotone, ComponentFillDuotone as ComponentFillDuotoneIcon, ComponentFillDuotone as SiComponentFillDuotone };
export default ComponentFillDuotone;
export type { ComponentFillDuotoneProps };
