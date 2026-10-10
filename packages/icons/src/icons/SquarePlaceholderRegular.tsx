import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1q.01 1.79-.05 2.98-.04 1.19-.34 2.08-.1.29-.24.55c-.55 1.08-1.43 1.96-2.51 2.51q-.27.14-.55.24-.89.29-2.08.35t-2.98.04h-1c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-1q-.01-1.79.04-2.98t.35-2.08q.1-.29.24-.55c.55-1.08 1.43-1.96 2.51-2.51q.27-.14.55-.24.89-.29 2.08-.34t2.98-.05zM4.3 8.61c-.05.75-.05 1.67-.05 2.89v.17l8.08 8.08h.17c1.22 0 2.14 0 2.9-.04l.39-.03L4.32 8.2zm-.04 5.2q0 1.13.06 1.91c.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4q.79.05 1.93.05zM6.5 4.74c-.75.4-1.37 1-1.77 1.76L17.5 19.25c.75-.4 1.37-1.01 1.76-1.76zm4.99-.5c-1.22 0-2.15 0-2.9.04l-.39.03L19.68 15.8l.03-.4c.04-.74.04-1.67.04-2.89v-.17l-8.08-8.08zm8.24 5.95q0-1.15-.06-1.92c-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4q-.79-.05-1.93-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderRegular.displayName = 'SquarePlaceholderRegular';

// Triple export pattern
export { SquarePlaceholderRegular, SquarePlaceholderRegular as SquarePlaceholderRegularIcon, SquarePlaceholderRegular as SiSquarePlaceholderRegular };
export default SquarePlaceholderRegular;
export type { SquarePlaceholderRegularProps };
