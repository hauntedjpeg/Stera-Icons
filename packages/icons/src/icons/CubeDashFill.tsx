import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashFillProps = Omit<IconBaseProps, 'children'>;

const CubeDashFill = memo(
  forwardRef<SVGSVGElement, CubeDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.83 4.98c.42-.23.95-.08 1.18.34.24.43.09.96-.34 1.2L4.8 7l1.44.8L9.6 9.67h.01L12 11l2.39-1.33c.42-.23.95-.08 1.19.34s.08.96-.34 1.2l-2.37 1.3v8l.96-.53c.42-.23.95-.08 1.18.34.24.43.09.96-.34 1.2l-1.27.7c-.87.49-1.93.49-2.8 0l-1.06-.59-.3-.16-4.2-2.33-.47-.27-.97-.53c-.9-.51-1.47-1.47-1.47-2.52V8.18c0-1.05.56-2 1.47-2.52zM21 13.62c.48 0 .87.4.88.88v1.32c0 1.05-.57 2-1.48 2.52l-1.23.67c-.42.24-.95.09-1.18-.34-.24-.42-.09-.95.34-1.19l1.22-.67c.35-.2.57-.58.57-.99V14.5c0-.48.4-.88.88-.88M17.99 5.32c.23-.42.76-.57 1.18-.34l1.23.68c.9.51 1.47 1.47 1.48 2.52V9.5c0 .48-.4.87-.88.87s-.87-.39-.87-.87V8.49l-1.52.84c-.42.23-.95.08-1.19-.34s-.08-.96.34-1.2L19.2 7l-.87-.49c-.43-.23-.58-.76-.34-1.19M10.6 1.77c.87-.48 1.93-.48 2.8 0l1.27.71c.43.24.58.77.34 1.2s-.76.57-1.18.33l-1.28-.7c-.34-.2-.76-.2-1.1 0l-1.28.7c-.42.24-.95.09-1.18-.34-.24-.42-.09-.95.34-1.19z" />
    </IconBase>
  ))
);

CubeDashFill.displayName = 'CubeDashFill';

// Triple export pattern
export { CubeDashFill, CubeDashFill as CubeDashFillIcon, CubeDashFill as SiCubeDashFill };
export default CubeDashFill;
export type { CubeDashFillProps };
