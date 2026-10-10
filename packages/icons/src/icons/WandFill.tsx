import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandFillProps = Omit<IconBaseProps, 'children'>;

const WandFill = memo(
  forwardRef<SVGSVGElement, WandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3c0-.48.39-.87.87-.87" />
        <path d="M15.57 7.24c.34-.2.77-.14 1.05.14s.34.7.14 1.05l-1.07 1.91c-.58 1.03-.58 2.29 0 3.32l1.07 1.91c.2.34.14.77-.14 1.05s-.7.34-1.05.14l-1.91-1.07c-1.03-.57-2.28-.58-3.3 0h-.02l-1.19.67q-.61.34-1.12.85l-3.91 3.9c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l3.91-3.91q.5-.5.85-1.12l.67-1.2c.58-1.02.58-2.28 0-3.3L7.24 8.42c-.2-.34-.14-.77.14-1.05s.7-.34 1.05-.14l1.91 1.07c1.03.58 2.29.58 3.32 0zM17.88 17.88c.34-.34.9-.34 1.24 0l1 1c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1-1c-.34-.34-.34-.9 0-1.24" />
        <path d="M6 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM21 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM12 2.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88s-.87-.4-.87-.88V3c0-.48.39-.87.87-.87M3.88 3.88c.34-.34.9-.34 1.24 0l1 1c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1-1c-.34-.34-.34-.9 0-1.24M18.88 3.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1 1c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

WandFill.displayName = 'WandFill';

// Triple export pattern
export { WandFill, WandFill as WandFillIcon, WandFill as SiWandFill };
export default WandFill;
export type { WandFillProps };
