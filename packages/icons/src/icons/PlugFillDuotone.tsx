import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugFillDuotone = memo(
  forwardRef<SVGSVGElement, PlugFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-fill-duotone" {...props}>
      <path d="M5.66 10.1a1.4 1.4 0 0 1 1.8.12l6.32 6.32c.49.5.53 1.26.12 1.8l-.09.11-.63.68-.03.02a5.88 5.88 0 1 1-8.28-8.33l.68-.63zM21.38 1.38a.88.88 0 0 1 1.24 1.24l-2.9 2.9a6 6 0 0 0-1.23-1.25z" opacity={0.4} />
        <path d="M10.85 4.85a5.87 5.87 0 1 1 8.28 8.33l-.68.63c-.54.5-1.39.5-1.91-.03l-1.04-1.04-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-1.76-1.76-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-1.04-1.04a1.4 1.4 0 0 1-.03-1.9l.63-.7zM4.27 18.49a6 6 0 0 0 1.24 1.24l-2.9 2.89a.88.88 0 0 1-1.23-1.24z" />
    </IconBase>
  ))
);

PlugFillDuotone.displayName = 'PlugFillDuotone';

// Triple export pattern (lucide-react style)
export { PlugFillDuotone, PlugFillDuotone as PlugFillDuotoneIcon, PlugFillDuotone as SiPlugFillDuotone };
export default PlugFillDuotone;
export type { PlugFillDuotoneProps };
