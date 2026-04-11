import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashFillProps = Omit<IconBaseProps, 'children'>;

const CubeDashFill = memo(
  forwardRef<SVGSVGElement, CubeDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.83 4.98a.88.88 0 0 1 .84 1.53L4.8 7l1.44.8L9.6 9.67h.01L12 11l2.39-1.33a.88.88 0 0 1 .85 1.53l-2.37 1.31v8l.96-.53a.87.87 0 0 1 .84 1.53l-1.27.72c-.87.48-1.93.48-2.8 0l-1.06-.6-.3-.16-4.2-2.33-.47-.27-.97-.53a2.9 2.9 0 0 1-1.47-2.52V8.18c0-1.05.56-2 1.47-2.52zM21 13.62c.48 0 .87.4.88.88v1.32c0 1.05-.57 2-1.48 2.52l-1.23.67a.87.87 0 1 1-.84-1.53l1.22-.67c.35-.2.57-.58.57-.99V14.5c0-.48.4-.88.88-.88M17.99 5.32a.9.9 0 0 1 1.18-.34l1.23.68c.9.51 1.47 1.47 1.48 2.52V9.5a.88.88 0 0 1-1.75 0V8.49l-1.52.84a.87.87 0 1 1-.85-1.53L19.2 7l-.87-.49a.87.87 0 0 1-.34-1.19M10.6 1.77a2.9 2.9 0 0 1 2.8 0l1.27.71a.87.87 0 0 1-.84 1.53l-1.28-.7a1.1 1.1 0 0 0-1.1 0l-1.28.7a.87.87 0 1 1-.84-1.53z" />
    </IconBase>
  ))
);

CubeDashFill.displayName = 'CubeDashFill';

// Triple export pattern (lucide-react style)
export { CubeDashFill, CubeDashFill as CubeDashFillIcon, CubeDashFill as SiCubeDashFill };
export default CubeDashFill;
export type { CubeDashFillProps };
