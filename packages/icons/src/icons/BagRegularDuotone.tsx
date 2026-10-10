import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagRegularDuotone = memo(
  forwardRef<SVGSVGElement, BagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 6.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-3.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v3.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.4c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M12 2.25c2.07 0 3.75 1.68 3.75 3.75v.27q-.64-.03-1.5-.02V6c0-1.24-1-2.25-2.25-2.25-1.24 0-2.25 1-2.25 2.25v.25q-.86 0-1.5.02V6c0-2.07 1.68-3.75 3.75-3.75" />
    </IconBase>
  ))
);

BagRegularDuotone.displayName = 'BagRegularDuotone';

// Triple export pattern
export { BagRegularDuotone, BagRegularDuotone as BagRegularDuotoneIcon, BagRegularDuotone as SiBagRegularDuotone };
export default BagRegularDuotone;
export type { BagRegularDuotoneProps };
