import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.3 13.04c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-3.5 3.5q-.32.3-.77.29c-.29-.02-.56-.17-.73-.4l-1.5-2c-.33-.44-.24-1.07.2-1.4s1.07-.24 1.4.2l.8 1.08zM21 14.5c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M7.3 6.04c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-3.5 3.5q-.32.3-.77.29c-.29-.02-.56-.17-.73-.4l-1.5-2c-.33-.44-.24-1.07.2-1.4s1.07-.24 1.4.2l.8 1.08zM21 7.5c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListCheckSimpleBoldDuotone.displayName = 'ListCheckSimpleBoldDuotone';

// Triple export pattern
export { ListCheckSimpleBoldDuotone, ListCheckSimpleBoldDuotone as ListCheckSimpleBoldDuotoneIcon, ListCheckSimpleBoldDuotone as SiListCheckSimpleBoldDuotone };
export default ListCheckSimpleBoldDuotone;
export type { ListCheckSimpleBoldDuotoneProps };
