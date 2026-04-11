import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeDashFillDuotone = memo(
  forwardRef<SVGSVGElement, CubeDashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.45 3.3c.34-.18.76-.18 1.1 0l1.28.71c.42.24.95.09 1.18-.34l2.97 1.65a.9.9 0 0 0 .35 1.2l.87.48-1.44.8a.87.87 0 0 0 .85 1.53l1.52-.84v1c0 .5.39.88.87.88v3.25c-.48 0-.87.4-.87.88v1.32c0 .41-.23.79-.58.99l-1.22.67a.87.87 0 0 0-.34 1.2L15 20.31a.9.9 0 0 0-1.18-.34l-.95.53v-1.64a.88.88 0 0 0-1.76 0v1.64l-.95-.53a.9.9 0 0 0-1.18.34L6 18.67a.87.87 0 0 0-.34-1.19l-1.22-.67c-.35-.2-.58-.58-.58-.99V14.5c0-.48-.39-.88-.87-.88v-3.25c.48 0 .88-.39.88-.87V8.49l1.5.84a.87.87 0 1 0 .86-1.53L4.8 7l.87-.49a.87.87 0 0 0 .34-1.19L9 3.67c.23.43.76.58 1.18.34zm4.13 6.71a.87.87 0 0 0-1.2-.34L12 11 9.61 9.67a.88.88 0 0 0-.85 1.53l2.37 1.31v2.61a.88.88 0 0 0 1.74 0v-2.6l2.37-1.32a.87.87 0 0 0 .34-1.19" clipRule="evenodd" opacity={.4} />
        <path d="M12 18c.48 0 .87.4.88.87v1.64l.95-.53a.87.87 0 0 1 .84 1.53l-1.27.71c-.87.49-1.93.49-2.8 0l-1.27-.7a.87.87 0 1 1 .84-1.54l.96.53v-1.64c0-.48.39-.87.87-.87M3 13.62c.48 0 .87.4.88.88v1.32c0 .41.22.79.57.99l1.22.67a.87.87 0 0 1-.84 1.53l-1.23-.67a2.9 2.9 0 0 1-1.47-2.52V14.5c0-.48.39-.88.87-.88M21 13.62c.48 0 .87.4.88.88v1.32c0 1.05-.57 2-1.48 2.52l-1.23.67a.87.87 0 1 1-.84-1.53l1.22-.67c.35-.2.57-.58.57-.99V14.5c0-.48.4-.88.88-.88M14.39 9.67a.87.87 0 0 1 .85 1.53l-2.37 1.31v2.61a.87.87 0 1 1-1.74 0v-2.6L8.75 11.2a.87.87 0 1 1 .85-1.53L12 11zM4.83 4.98a.87.87 0 0 1 .84 1.53L4.8 7l1.44.8a.87.87 0 0 1-.85 1.53l-1.51-.84v1a.87.87 0 0 1-1.75 0V8.19c0-1.05.56-2 1.47-2.52zM17.99 5.32a.87.87 0 0 1 1.18-.34l1.23.68c.9.51 1.47 1.47 1.48 2.52V9.5a.87.87 0 0 1-1.75 0V8.49l-1.52.84a.87.87 0 1 1-.85-1.53L19.2 7l-.87-.49a.87.87 0 0 1-.34-1.19M10.6 1.77a2.9 2.9 0 0 1 2.8 0l1.27.71a.87.87 0 0 1-.84 1.53l-1.28-.7a1.1 1.1 0 0 0-1.1 0l-1.28.7a.87.87 0 1 1-.84-1.53z" />
    </IconBase>
  ))
);

CubeDashFillDuotone.displayName = 'CubeDashFillDuotone';

// Triple export pattern (lucide-react style)
export { CubeDashFillDuotone, CubeDashFillDuotone as CubeDashFillDuotoneIcon, CubeDashFillDuotone as SiCubeDashFillDuotone };
export default CubeDashFillDuotone;
export type { CubeDashFillDuotoneProps };
