import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.62 13.8c0 3.56 2.89 6.45 6.45 6.45 3.2 0 5.85-2.33 6.36-5.38l.05-.16-.03.08c-.1.37.09.76.45.9.38.15.82-.04.97-.43l.02-.06c-.66 3.72-3.9 6.55-7.82 6.55-4.38 0-7.93-3.54-7.95-7.91.02.4.35.71.75.71.39 0 .7-.3.75-.67z" opacity={.4} />
        <path d="M10.27 2.25c.96 0 1.79.53 2.22 1.3q.6-.39 1.38-.4c1.4 0 2.55 1.14 2.55 2.55v4.45l.09-.15c.4-.68 1.07-1.11 1.8-1.23.55-.1 1.15 0 1.68.3 1.2.7 1.61 2.2.97 3.41l-1.09 2.78c-.15.39-.59.58-.97.43-.39-.15-.58-.59-.43-.97l1.1-2.8.05-.11c.3-.5.12-1.14-.38-1.43q-.34-.2-.7-.13-.47.08-.74.51l-1.48 2.52c-.18.3-.52.43-.85.34s-.55-.38-.55-.72V5.7c0-.58-.47-1.05-1.05-1.05-.54 0-1 .41-1.04.94l-.01.11v5.4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.8c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v6.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.5c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v6.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.5c0-1.4 1.14-2.55 2.55-2.55q.56 0 1.05.23V4.8c0-1.4 1.14-2.55 2.55-2.55" />
    </IconBase>
  ))
);

HandLeftRegularDuotone.displayName = 'HandLeftRegularDuotone';

// Triple export pattern
export { HandLeftRegularDuotone, HandLeftRegularDuotone as HandLeftRegularDuotoneIcon, HandLeftRegularDuotone as SiHandLeftRegularDuotone };
export default HandLeftRegularDuotone;
export type { HandLeftRegularDuotoneProps };
