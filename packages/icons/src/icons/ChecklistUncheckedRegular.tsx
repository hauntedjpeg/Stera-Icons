import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedRegular = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 13.25c1.52 0 2.75 1.23 2.75 2.75S7.52 18.75 6 18.75 3.25 17.52 3.25 16 4.48 13.25 6 13.25m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path d="M20 15.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M6 5.25c1.52 0 2.75 1.23 2.75 2.75S7.52 10.75 6 10.75 3.25 9.52 3.25 8 4.48 5.25 6 5.25m0 1.5c-.69 0-1.25.56-1.25 1.25S5.31 9.25 6 9.25 7.25 8.69 7.25 8 6.69 6.75 6 6.75" clipRule="evenodd" />
        <path d="M20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ChecklistUncheckedRegular.displayName = 'ChecklistUncheckedRegular';

// Triple export pattern
export { ChecklistUncheckedRegular, ChecklistUncheckedRegular as ChecklistUncheckedRegularIcon, ChecklistUncheckedRegular as SiChecklistUncheckedRegular };
export default ChecklistUncheckedRegular;
export type { ChecklistUncheckedRegularProps };
