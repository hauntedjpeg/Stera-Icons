import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentRegularProps = Omit<IconBaseProps, 'children'>;

const ComponentRegular = memo(
  forwardRef<SVGSVGElement, ComponentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.21 13.74a1.25 1.25 0 0 1 1.58 0l.1.08 2.79 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8a1.25 1.25 0 0 1 0-1.76l2.8-2.8zM9.56 17.5 12 19.94l2.44-2.44L12 15.06zM5.71 8.24a1.25 1.25 0 0 1 1.58 0l.1.08 2.79 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8a1.25 1.25 0 0 1 0-1.76l2.8-2.8zM4.06 12l2.44 2.44L8.94 12 6.5 9.56zM16.62 8.32a1.25 1.25 0 0 1 1.76 0l2.8 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8a1.25 1.25 0 0 1 0-1.76zM15.06 12l2.44 2.44L19.94 12 17.5 9.56zM11.21 2.74a1.25 1.25 0 0 1 1.58 0l.1.08 2.79 2.8c.48.48.48 1.28 0 1.76l-2.8 2.8c-.48.48-1.28.48-1.76 0l-2.8-2.8a1.25 1.25 0 0 1 0-1.76l2.8-2.8zM9.56 6.5 12 8.94l2.44-2.44L12 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentRegular.displayName = 'ComponentRegular';

// Triple export pattern (lucide-react style)
export { ComponentRegular, ComponentRegular as ComponentRegularIcon, ComponentRegular as SiComponentRegular };
export default ComponentRegular;
export type { ComponentRegularProps };
