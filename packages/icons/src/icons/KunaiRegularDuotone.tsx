import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KunaiRegularDuotone = memo(
  forwardRef<SVGSVGElement, KunaiRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m14.3 11.76-.66 3.96q-.07.36-.38.54l-9.9 5.4c-.3.16-.65.1-.89-.13s-.29-.6-.13-.89l5.4-9.9q.18-.31.54-.38l3.96-.66zm-5.42.02-4 7.34 7.34-4 .67-4z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.95 6q.37.67 1.06 1.05l-3.15 3.15-1.06-1.06z" opacity={0.4} />
        <path d="M11.92 8.32c.3-.3.77-.3 1.06 0l2.7 2.7c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.7-2.7c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M19.2 2.25c1.4 0 2.55 1.14 2.55 2.55 0 1.4-1.14 2.55-2.55 2.55-1.4 0-2.55-1.14-2.55-2.55 0-1.4 1.14-2.55 2.55-2.55m0 1.5c-.58 0-1.05.47-1.05 1.05s.47 1.05 1.05 1.05 1.05-.47 1.05-1.05-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

KunaiRegularDuotone.displayName = 'KunaiRegularDuotone';

// Triple export pattern
export { KunaiRegularDuotone, KunaiRegularDuotone as KunaiRegularDuotoneIcon, KunaiRegularDuotone as SiKunaiRegularDuotone };
export default KunaiRegularDuotone;
export type { KunaiRegularDuotoneProps };
