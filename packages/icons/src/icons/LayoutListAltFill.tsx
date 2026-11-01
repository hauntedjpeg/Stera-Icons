import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListAltFillProps = Omit<IconBaseProps, 'children'>;

const LayoutListAltFill = memo(
  forwardRef<SVGSVGElement, LayoutListAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.25 13q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v2.75q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5.5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88v-2.75q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM18.5 18.63c.48 0 .88.39.88.87s-.4.88-.88.88h-4.75c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM20.5 13.88c.48 0 .88.39.88.87s-.4.88-.88.88h-6.75c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM8.25 2.75q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v2.75q0 .52-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5.5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5.5q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM18.5 8.38c.48 0 .88.39.88.87s-.4.88-.88.88h-4.75c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM20.5 3.63c.48 0 .88.39.88.87s-.4.88-.88.88h-6.75c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

LayoutListAltFill.displayName = 'LayoutListAltFill';

// Triple export pattern
export { LayoutListAltFill, LayoutListAltFill as LayoutListAltFillIcon, LayoutListAltFill as SiLayoutListAltFill };
export default LayoutListAltFill;
export type { LayoutListAltFillProps };
