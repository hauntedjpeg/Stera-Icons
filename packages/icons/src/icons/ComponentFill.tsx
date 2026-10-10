import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentFillProps = Omit<IconBaseProps, 'children'>;

const ComponentFill = memo(
  forwardRef<SVGSVGElement, ComponentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.21 13.74c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8zM5.71 8.24c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8zM16.62 8.32c.48-.48 1.28-.48 1.76 0l2.8 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76zM11.21 2.74c.46-.38 1.12-.38 1.58 0l.1.08 2.79 2.8c.49.48.49 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8c-.48-.48-.48-1.28 0-1.76l2.8-2.8z" />
    </IconBase>
  ))
);

ComponentFill.displayName = 'ComponentFill';

// Triple export pattern
export { ComponentFill, ComponentFill as ComponentFillIcon, ComponentFill as SiComponentFill };
export default ComponentFill;
export type { ComponentFillProps };
