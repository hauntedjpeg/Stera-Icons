import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillProps = Omit<IconBaseProps, 'children'>;

const PlugFill = memo(
  forwardRef<SVGSVGElement, PlugFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-fill" {...props}>
      <path d="M5.66 10.1a1.4 1.4 0 0 1 1.8.12l6.32 6.32c.49.5.53 1.26.12 1.8l-.09.11-.63.68-.03.02a5.9 5.9 0 0 1-7.64.58l-2.9 2.89a.88.88 0 0 1-1.23-1.24l2.9-2.9a5.9 5.9 0 0 1 .57-7.63l.02-.02.68-.64zM21.38 1.38a.88.88 0 0 1 1.24 1.24l-2.9 2.9a5.9 5.9 0 0 1-.59 7.66l-.68.63c-.54.5-1.39.5-1.91-.03l-1.04-1.04-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-1.76-1.76-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-1.04-1.04a1.4 1.4 0 0 1-.03-1.9l.63-.7.03-.01a5.9 5.9 0 0 1 7.64-.58z" />
    </IconBase>
  ))
);

PlugFill.displayName = 'PlugFill';

// Triple export pattern (lucide-react style)
export { PlugFill, PlugFill as PlugFillIcon, PlugFill as SiPlugFill };
export default PlugFill;
export type { PlugFillProps };
