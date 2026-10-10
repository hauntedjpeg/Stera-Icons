import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SelectFieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SelectFieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, SelectFieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.01 10.68c.32-.27.79-.23 1.06.08.27.32.23.79-.08 1.06l-1.75 1.5c-.28.24-.7.24-.98 0l-1.75-1.5c-.31-.27-.35-.74-.08-1.06.27-.31.74-.35 1.06-.08l1.26 1.08z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM6.8 6.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h10.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={0.4} />
        <path d="M11 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

SelectFieldRegularDuotone.displayName = 'SelectFieldRegularDuotone';

// Triple export pattern
export { SelectFieldRegularDuotone, SelectFieldRegularDuotone as SelectFieldRegularDuotoneIcon, SelectFieldRegularDuotone as SiSelectFieldRegularDuotone };
export default SelectFieldRegularDuotone;
export type { SelectFieldRegularDuotoneProps };
