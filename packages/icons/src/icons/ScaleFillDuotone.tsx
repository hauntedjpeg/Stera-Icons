import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScaleFillDuotone = memo(
  forwardRef<SVGSVGElement, ScaleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.09 14.6q-1.1.66-2.09.65-1 .01-2.09-.65L5 9.1zM21.09 14.6q-1.1.66-2.09.65-1 .01-2.09-.65L19 9.1z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c.48 0 .88.39.88.87v1.45q.37.07.75.2l3.64 1.3q.5.17 1.05.17H21c.48 0 .88.4.88.88s-.4.88-.88.88h-.87l2.57 6.74c.12.32.02.67-.25.87-1.1.81-2.25 1.26-3.45 1.26s-2.35-.45-3.45-1.26c-.27-.2-.37-.55-.25-.87l2.57-6.77q-.6-.05-1.19-.26L13.05 6.3l-.17-.05v13.88H15c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.13V6.24l-.18.05-3.63 1.3q-.58.2-1.2.25l2.58 6.77c.12.32.02.67-.25.87-1.1.81-2.25 1.26-3.45 1.26s-2.35-.45-3.45-1.26c-.27-.2-.37-.55-.25-.87l2.57-6.74H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.68q.55 0 1.05-.19l3.64-1.29q.37-.13.76-.2V3c0-.48.39-.87.87-.87M2.91 14.6q1.1.66 2.09.65 1 .01 2.09-.65L5 9.1zm14 0q1.1.66 2.09.65 1 .01 2.09-.65L19 9.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScaleFillDuotone.displayName = 'ScaleFillDuotone';

// Triple export pattern
export { ScaleFillDuotone, ScaleFillDuotone as ScaleFillDuotoneIcon, ScaleFillDuotone as SiScaleFillDuotone };
export default ScaleFillDuotone;
export type { ScaleFillDuotoneProps };
