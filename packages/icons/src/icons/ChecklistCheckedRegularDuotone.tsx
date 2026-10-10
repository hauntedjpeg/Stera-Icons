import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6 13.25c1.52 0 2.75 1.23 2.75 2.75S7.52 18.75 6 18.75 3.25 17.52 3.25 16 4.48 13.25 6 13.25M6 5.25c1.52 0 2.75 1.23 2.75 2.75S7.52 10.75 6 10.75 3.25 9.52 3.25 8 4.48 5.25 6 5.25" />
    </IconBase>
  ))
);

ChecklistCheckedRegularDuotone.displayName = 'ChecklistCheckedRegularDuotone';

// Triple export pattern
export { ChecklistCheckedRegularDuotone, ChecklistCheckedRegularDuotone as ChecklistCheckedRegularDuotoneIcon, ChecklistCheckedRegularDuotone as SiChecklistCheckedRegularDuotone };
export default ChecklistCheckedRegularDuotone;
export type { ChecklistCheckedRegularDuotoneProps };
