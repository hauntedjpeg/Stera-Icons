import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.06 7.89c.34-.24.81-.16 1.05.17l1.67 2.34c.68.96.68 2.24 0 3.2l-1.67 2.34c-.24.33-.7.41-1.05.17-.33-.24-.41-.7-.17-1.05l1.67-2.33c.31-.44.31-1.02 0-1.46l-1.67-2.33c-.24-.34-.16-.81.17-1.05" />
        <path d="M15.97 4.25c.89 0 1.72.43 2.24 1.15l1.9 2.66c-.24-.33-.7-.41-1.05-.17-.33.24-.41.7-.17 1.05l-1.9-2.67c-.24-.33-.62-.52-1.02-.52H3.94c-.2 0-.32.23-.2.4l3.04 4.25c.68.96.68 2.24 0 3.2l-3.04 4.25c-.12.17 0 .4.2.4h12.03c.4 0 .78-.2 1.02-.52l1.9-2.67c-.24.34-.16.81.17 1.05.34.24.81.16 1.05-.17l-1.9 2.66c-.52.72-1.35 1.15-2.24 1.15H3.94c-1.42 0-2.25-1.6-1.42-2.77l3.04-4.25c.31-.44.31-1.02 0-1.46L2.52 7.02c-.83-1.16 0-2.77 1.42-2.77z" opacity={.4} />
    </IconBase>
  ))
);

LabelAltRegularDuotone.displayName = 'LabelAltRegularDuotone';

// Triple export pattern
export { LabelAltRegularDuotone, LabelAltRegularDuotone as LabelAltRegularDuotoneIcon, LabelAltRegularDuotone as SiLabelAltRegularDuotone };
export default LabelAltRegularDuotone;
export type { LabelAltRegularDuotoneProps };
