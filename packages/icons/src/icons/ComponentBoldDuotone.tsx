import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ComponentBoldDuotone = memo(
  forwardRef<SVGSVGElement, ComponentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.55 8.04a1.5 1.5 0 0 1 1.9 0l.11.1 2.8 2.8a1.5 1.5 0 0 1 0 2.12l-2.8 2.8a1.5 1.5 0 0 1-2.12 0l-2.8-2.8a1.5 1.5 0 0 1 0-2.12l2.8-2.8zM4.41 12l2.09 2.09L8.59 12 6.5 9.91zM16.55 8.04a1.5 1.5 0 0 1 2.01.1l2.8 2.8a1.5 1.5 0 0 1 0 2.12l-2.8 2.8a1.5 1.5 0 0 1-2.12 0l-2.8-2.8a1.5 1.5 0 0 1 0-2.12l2.8-2.8zM15.41 12l2.09 2.09L19.59 12 17.5 9.91z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.05 13.54a1.5 1.5 0 0 1 1.9 0l.11.1 2.8 2.8a1.5 1.5 0 0 1 0 2.12l-2.8 2.8a1.5 1.5 0 0 1-2.12 0l-2.8-2.8a1.5 1.5 0 0 1 0-2.12l2.8-2.8zM9.91 17.5 12 19.59l2.09-2.09L12 15.41zM11.05 2.54a1.5 1.5 0 0 1 2.01.1l2.8 2.8a1.5 1.5 0 0 1 0 2.12l-2.8 2.8a1.5 1.5 0 0 1-2.12 0l-2.8-2.8a1.5 1.5 0 0 1 0-2.12l2.8-2.8zM9.91 6.5 12 8.59l2.09-2.09L12 4.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentBoldDuotone.displayName = 'ComponentBoldDuotone';

// Triple export pattern (lucide-react style)
export { ComponentBoldDuotone, ComponentBoldDuotone as ComponentBoldDuotoneIcon, ComponentBoldDuotone as SiComponentBoldDuotone };
export default ComponentBoldDuotone;
export type { ComponentBoldDuotoneProps };
