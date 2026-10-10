import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillProps = Omit<IconBaseProps, 'children'>;

const PlugFill = memo(
  forwardRef<SVGSVGElement, PlugFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.66 10.1c.54-.41 1.31-.37 1.8.12l6.32 6.32c.49.5.53 1.26.12 1.8l-.09.11-.63.68-.03.02c-2.08 2.09-5.34 2.28-7.64.58l-2.9 2.89c-.33.34-.89.34-1.23 0s-.34-.9 0-1.24l2.9-2.9c-1.7-2.3-1.52-5.55.57-7.63l.02-.02.68-.64zM21.38 1.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.9 2.9c1.7 2.29 1.52 5.55-.57 7.64l-.02.02-.68.63c-.54.5-1.39.5-1.91-.03l-1.04-1.04-.88.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l.88-.88-1.76-1.76-.88.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l.88-.88-1.04-1.04c-.52-.52-.54-1.37-.03-1.9l.63-.7.03-.01c2.08-2.09 5.34-2.28 7.64-.58z" />
    </IconBase>
  ))
);

PlugFill.displayName = 'PlugFill';

// Triple export pattern
export { PlugFill, PlugFill as PlugFillIcon, PlugFill as SiPlugFill };
export default PlugFill;
export type { PlugFillProps };
