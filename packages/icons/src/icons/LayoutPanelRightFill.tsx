import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutPanelRightFillProps = Omit<IconBaseProps, 'children'>;

const LayoutPanelRightFill = memo(
  forwardRef<SVGSVGElement, LayoutPanelRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 13.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v3q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88v-3q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM19 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v14q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02h-3q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM8 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v3q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

LayoutPanelRightFill.displayName = 'LayoutPanelRightFill';

// Triple export pattern
export { LayoutPanelRightFill, LayoutPanelRightFill as LayoutPanelRightFillIcon, LayoutPanelRightFill as SiLayoutPanelRightFill };
export default LayoutPanelRightFill;
export type { LayoutPanelRightFillProps };
