import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoltRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 3.25c.96 0 1.62 0 2.22.19q.75.24 1.36.8c.46.42.77 1 1.25 1.84l1.8 3.2c.46.81.77 1.36.9 1.96q.15.76 0 1.52c-.12.6-.44 1.15-.9 1.96l-1.8 3.2c-.48.85-.79 1.42-1.25 1.85q-.6.54-1.36.8c-.6.19-1.26.18-2.23.18H9.81c-.97 0-1.63 0-2.23-.19q-.76-.24-1.36-.8c-.46-.42-.78-1-1.25-1.84l-1.8-3.2c-.46-.81-.78-1.36-.9-1.96q-.15-.76 0-1.52c.12-.6.44-1.15.9-1.96l1.8-3.2c.47-.85.79-1.42 1.25-1.85q.6-.54 1.36-.8c.6-.19 1.26-.18 2.23-.18zm-4.4 1.5c-1.07 0-1.43 0-1.75.11q-.46.15-.81.48c-.25.22-.44.54-.96 1.47l-1.8 3.2c-.51.9-.68 1.22-.74 1.53q-.09.46 0 .92c.06.31.23.62.74 1.53l1.8 3.2c.52.93.71 1.25.96 1.47q.35.32.81.48c.32.1.68.11 1.76.11h4.38c1.07 0 1.44 0 1.76-.11q.46-.16.81-.48c.25-.22.44-.54.96-1.47l1.8-3.2c.5-.9.67-1.22.74-1.53q.09-.46 0-.92c-.07-.31-.23-.62-.74-1.53l-1.8-3.2c-.52-.93-.71-1.25-.96-1.47q-.35-.33-.81-.48c-.32-.1-.69-.11-1.76-.11z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 7.75 12 7.75m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BoltRegularDuotone.displayName = 'BoltRegularDuotone';

// Triple export pattern
export { BoltRegularDuotone, BoltRegularDuotone as BoltRegularDuotoneIcon, BoltRegularDuotone as SiBoltRegularDuotone };
export default BoltRegularDuotone;
export type { BoltRegularDuotoneProps };
