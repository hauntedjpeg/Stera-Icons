import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutPanelRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutPanelRightFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutPanelRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 13.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v3q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88v-3q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM8 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v3q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02z" opacity={0.4} />
        <path d="M19 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v14q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02h-3q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

LayoutPanelRightFillDuotone.displayName = 'LayoutPanelRightFillDuotone';

// Triple export pattern
export { LayoutPanelRightFillDuotone, LayoutPanelRightFillDuotone as LayoutPanelRightFillDuotoneIcon, LayoutPanelRightFillDuotone as SiLayoutPanelRightFillDuotone };
export default LayoutPanelRightFillDuotone;
export type { LayoutPanelRightFillDuotoneProps };
