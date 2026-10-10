import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRegularProps = Omit<IconBaseProps, 'children'>;

const PencilRegular = memo(
  forwardRef<SVGSVGElement, PencilRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.59 1.85c.78-.78 2.04-.78 2.82 0l2.74 2.74c.78.78.78 2.04 0 2.82L8.53 21.03q-.18.19-.46.22l-5 .5q-.35.02-.6-.22-.25-.25-.22-.6l.5-5 .03-.13q.05-.2.19-.33zM4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.35 2.91c-.2-.2-.5-.2-.7 0L15.06 5.5l3.44 3.44 2.59-2.59c.2-.2.2-.5 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilRegular.displayName = 'PencilRegular';

// Triple export pattern
export { PencilRegular, PencilRegular as PencilRegularIcon, PencilRegular as SiPencilRegular };
export default PencilRegular;
export type { PencilRegularProps };
