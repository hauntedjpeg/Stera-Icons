import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.59 1.85c.78-.78 2.04-.78 2.82 0l2.74 2.74c.78.78.78 2.04 0 2.82l-3.65 3.65-5.56-5.56zm1.76 1.06c-.2-.2-.5-.2-.7 0L15.06 5.5l3.44 3.44 2.59-2.59c.2-.2.2-.5 0-.7z" clipRule="evenodd" opacity={.4} />
        <path d="M12.94 5.5 14 6.56l-9.78 9.78-.38 3.82 3.82-.38L17.44 10l1.06 1.06-9.97 9.97q-.18.19-.46.22l-5 .5q-.35.02-.6-.22-.25-.25-.22-.6l.5-5 .03-.13q.05-.2.19-.33z" />
    </IconBase>
  ))
);

PencilRegularDuotone.displayName = 'PencilRegularDuotone';

// Triple export pattern
export { PencilRegularDuotone, PencilRegularDuotone as PencilRegularDuotoneIcon, PencilRegularDuotone as SiPencilRegularDuotone };
export default PencilRegularDuotone;
export type { PencilRegularDuotoneProps };
