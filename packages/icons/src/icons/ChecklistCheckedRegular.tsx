import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedRegular = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 13.25c1.52 0 2.75 1.23 2.75 2.75S7.52 18.75 6 18.75 3.25 17.52 3.25 16 4.48 13.25 6 13.25M20 15.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6 5.25c1.52 0 2.75 1.23 2.75 2.75S7.52 10.75 6 10.75 3.25 9.52 3.25 8 4.48 5.25 6 5.25M20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ChecklistCheckedRegular.displayName = 'ChecklistCheckedRegular';

// Triple export pattern
export { ChecklistCheckedRegular, ChecklistCheckedRegular as ChecklistCheckedRegularIcon, ChecklistCheckedRegular as SiChecklistCheckedRegular };
export default ChecklistCheckedRegular;
export type { ChecklistCheckedRegularProps };
