import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.25 5.75q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88V19q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V8.5q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02M15.75 5.75q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88V13q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 13.51 13 13V8.5q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02M21 2.13a.88.88 0 0 1 0 1.75H3a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

AlignVerticalTopFill.displayName = 'AlignVerticalTopFill';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopFill, AlignVerticalTopFill as AlignVerticalTopFillIcon, AlignVerticalTopFill as SiAlignVerticalTopFill };
export default AlignVerticalTopFill;
export type { AlignVerticalTopFillProps };
