import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ComponentBoldDuotone = memo(
  forwardRef<SVGSVGElement, ComponentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.55 8.04c.55-.44 1.35-.44 1.9 0l.11.1 2.8 2.8c.58.59.58 1.53 0 2.12l-2.8 2.8c-.58.58-1.53.58-2.12 0l-2.8-2.8c-.58-.59-.58-1.53 0-2.12l2.8-2.8zM4.41 12l2.09 2.09L8.59 12 6.5 9.91zM16.55 8.04c.6-.48 1.46-.44 2.01.1l2.8 2.8c.58.59.58 1.53 0 2.12l-2.8 2.8c-.58.58-1.53.58-2.12 0l-2.8-2.8c-.58-.59-.58-1.53 0-2.12l2.8-2.8zM15.41 12l2.09 2.09L19.59 12 17.5 9.91z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.05 13.54c.55-.44 1.35-.45 1.9 0l.11.1 2.8 2.8c.58.59.58 1.54 0 2.12l-2.8 2.8c-.58.58-1.53.58-2.12 0l-2.8-2.8c-.58-.58-.58-1.53 0-2.12l2.8-2.8zM9.91 17.5 12 19.59l2.09-2.09L12 15.41zM11.05 2.54c.6-.48 1.46-.44 2.01.1l2.8 2.8c.58.59.58 1.54 0 2.12l-2.8 2.8c-.58.58-1.53.58-2.12 0l-2.8-2.8c-.58-.58-.58-1.53 0-2.12l2.8-2.8zM9.91 6.5 12 8.59l2.09-2.09L12 4.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentBoldDuotone.displayName = 'ComponentBoldDuotone';

// Triple export pattern
export { ComponentBoldDuotone, ComponentBoldDuotone as ComponentBoldDuotoneIcon, ComponentBoldDuotone as SiComponentBoldDuotone };
export default ComponentBoldDuotone;
export type { ComponentBoldDuotoneProps };
