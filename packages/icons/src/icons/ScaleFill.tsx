import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleFillProps = Omit<IconBaseProps, 'children'>;

const ScaleFill = memo(
  forwardRef<SVGSVGElement, ScaleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c.48 0 .87.39.87.87v1.45q.39.07.76.2l3.64 1.3q.5.17 1.05.17H21a.87.87 0 1 1 0 1.76h-.87l2.57 6.74c.12.32.02.67-.25.87A5.8 5.8 0 0 1 19 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87l2.57-6.77q-.6-.05-1.19-.26L13.05 6.3l-.18-.05v13.88H15a.87.87 0 1 1 0 1.75H9a.88.88 0 0 1 0-1.75h2.12V6.24l-.17.05-3.63 1.3q-.58.2-1.2.25l2.58 6.77c.12.32.02.67-.25.87A5.8 5.8 0 0 1 5 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87l2.57-6.74H3a.88.88 0 0 1 0-1.75h2.68q.55 0 1.05-.19l3.64-1.29q.38-.13.75-.2V3c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ScaleFill.displayName = 'ScaleFill';

// Triple export pattern (lucide-react style)
export { ScaleFill, ScaleFill as ScaleFillIcon, ScaleFill as SiScaleFill };
export default ScaleFill;
export type { ScaleFillProps };
