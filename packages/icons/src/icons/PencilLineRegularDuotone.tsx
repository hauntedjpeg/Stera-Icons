import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 20.25c.41 0 .75.34.75.75s-.34.75-.75.75H3q-.08 0-.17-.02.12.03.24.02l5-.5q.27-.04.46-.22l.78-.78z" opacity={.4} />
        <path fillRule="evenodd" d="M16.59 1.85c.78-.78 2.04-.78 2.82 0l2.74 2.74c.78.78.78 2.04 0 2.82L8.53 21.03q-.18.19-.46.22l-5 .5q-.35.02-.6-.22-.25-.25-.22-.6l.5-5 .03-.13q.05-.2.19-.33zM4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.35 2.91c-.2-.2-.5-.2-.7 0L15.06 5.5l3.44 3.44 2.59-2.59c.2-.2.2-.5 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineRegularDuotone.displayName = 'PencilLineRegularDuotone';

// Triple export pattern
export { PencilLineRegularDuotone, PencilLineRegularDuotone as PencilLineRegularDuotoneIcon, PencilLineRegularDuotone as SiPencilLineRegularDuotone };
export default PencilLineRegularDuotone;
export type { PencilLineRegularDuotoneProps };
