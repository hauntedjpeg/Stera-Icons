import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiBoldProps = Omit<IconBaseProps, 'children'>;

const KunaiBold = memo(
  forwardRef<SVGSVGElement, KunaiBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.4 3C19.84 3 21 4.16 21 5.6s-1.16 2.6-2.6 2.6q-.53 0-1-.2l-2.39 2.4.5.5c.39.38.39 1.02 0 1.4-.34.34-.85.39-1.24.15l-.48 2.91c-.05.3-.24.57-.51.72l-8.8 4.8c-.4.21-.87.14-1.19-.17s-.38-.8-.17-1.19l4.8-8.8q.24-.42.72-.5l2.91-.5c-.24-.38-.2-.9.14-1.23.4-.39 1.03-.39 1.42 0l.49.5 2.4-2.4q-.2-.46-.2-.99c0-1.44 1.16-2.6 2.6-2.6m-8.96 9.1L6.5 17.5l5.4-2.94.48-2.94zM18.4 5c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6" clipRule="evenodd" />
    </IconBase>
  ))
);

KunaiBold.displayName = 'KunaiBold';

// Triple export pattern
export { KunaiBold, KunaiBold as KunaiBoldIcon, KunaiBold as SiKunaiBold };
export default KunaiBold;
export type { KunaiBoldProps };
