import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2.13c.48 0 .88.39.88.87v18a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87M13 13q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02H8.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM19 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H8.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

AlignHorizontalLeftFill.displayName = 'AlignHorizontalLeftFill';

// Triple export pattern (lucide-react style)
export { AlignHorizontalLeftFill, AlignHorizontalLeftFill as AlignHorizontalLeftFillIcon, AlignHorizontalLeftFill as SiAlignHorizontalLeftFill };
export default AlignHorizontalLeftFill;
export type { AlignHorizontalLeftFillProps };
