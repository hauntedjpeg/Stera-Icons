import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 12.88c.48 0 .87.39.87.87v2.5h2.5c.48 0 .88.4.88.88s-.4.87-.88.87H18v2.5c0 .48-.4.88-.87.88-.49 0-.88-.4-.88-.88V18h-2.5c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h2.5v-2.5c0-.48.4-.87.88-.87" opacity={.4} />
        <path d="M8.25 13q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v2.75q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5.5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88v-2.75q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM8.25 2.75q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v2.75q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5.5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5.5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM18.5 2.75q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v2.75q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02h-2.75q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5.5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

LayoutGridPlusFillDuotone.displayName = 'LayoutGridPlusFillDuotone';

// Triple export pattern
export { LayoutGridPlusFillDuotone, LayoutGridPlusFillDuotone as LayoutGridPlusFillDuotoneIcon, LayoutGridPlusFillDuotone as SiLayoutGridPlusFillDuotone };
export default LayoutGridPlusFillDuotone;
export type { LayoutGridPlusFillDuotoneProps };
