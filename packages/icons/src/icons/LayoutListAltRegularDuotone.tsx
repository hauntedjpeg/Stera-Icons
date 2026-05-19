import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 18.75a.75.75 0 0 1 0 1.5h-4.75a.75.75 0 0 1 0-1.5zM20.5 14a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5zM18.5 8.5a.75.75 0 0 1 0 1.5h-4.75a.75.75 0 0 1 0-1.5zM20.5 3.75a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M7.85 13q.6 0 1.05.02t.87.23q.65.33.98.98c.15.28.2.58.23.87q.02.44.02 1.05v1.95q0 .6-.02 1.05t-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.9q-.6 0-1.05-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98 2 2 0 0 1-.23-.87q-.03-.44-.02-1.05v-1.95q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23Q5.3 13 5.9 13zM5.9 14.5c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.02.29-.02.92v1.95q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h1.95q.62 0 .92-.02c.2-.01.28-.04.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.02-.29.02-.92v-1.95q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02zM7.85 2.75q.6 0 1.05.02a2.25 2.25 0 0 1 1.86 1.2q.2.45.22.88.02.44.02 1.05v1.95q0 .6-.02 1.05t-.23.87q-.33.65-.98.98c-.28.15-.58.2-.87.23q-.44.02-1.05.02H5.9q-.6 0-1.05-.02a2 2 0 0 1-.87-.23A2.3 2.3 0 0 1 3 9.77a2 2 0 0 1-.23-.87q-.03-.44-.02-1.05V5.9q0-.6.02-1.05A2.25 2.25 0 0 1 3.97 3q.45-.2.88-.22.44-.03 1.05-.02zM5.9 4.25c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.02.29-.02.92v1.95q0 .62.02.92c.01.2.04.28.06.32q.11.22.33.33c.04.02.11.05.32.06q.29.02.92.02h1.95q.62 0 .92-.02c.2-.01.28-.04.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.02-.29.02-.92V5.9c0-.43 0-.71-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutListAltRegularDuotone.displayName = 'LayoutListAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListAltRegularDuotone, LayoutListAltRegularDuotone as LayoutListAltRegularDuotoneIcon, LayoutListAltRegularDuotone as SiLayoutListAltRegularDuotone };
export default LayoutListAltRegularDuotone;
export type { LayoutListAltRegularDuotoneProps };
