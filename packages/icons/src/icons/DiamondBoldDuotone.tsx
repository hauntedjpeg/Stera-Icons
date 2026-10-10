import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DiamondBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DiamondBoldDuotone = memo(
  forwardRef<SVGSVGElement, DiamondBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.24q.63 0 1.24.2.75.26 1.38.83.62.53 1.48 1.42l4.21 4.2c.58.6 1.07 1.07 1.42 1.5q.57.62.83 1.37c.26.8.26 1.67 0 2.48q-.27.75-.83 1.38-.54.62-1.42 1.48l-4.2 4.21c-.6.58-1.07 1.07-1.5 1.42q-.62.57-1.37.83-.6.2-1.24.2v-2q.31 0 .62-.1c.17-.06.37-.17.7-.45.35-.3.76-.7 1.37-1.31l4.2-4.21c.61-.6 1.03-1.02 1.32-1.37.28-.33.4-.54.45-.7.13-.4.13-.84 0-1.24-.06-.17-.17-.37-.45-.7-.3-.35-.7-.76-1.31-1.37l-4.21-4.2c-.6-.61-1.02-1.03-1.36-1.32-.34-.28-.54-.4-.71-.45q-.3-.1-.62-.1z" opacity={.4} />
        <path d="M12 3.24q-.31 0-.62.1c-.16.05-.37.17-.7.45-.35.3-.76.7-1.37 1.31l-4.2 4.21c-.61.6-1.03 1.02-1.32 1.36-.28.34-.4.54-.45.71q-.2.62 0 1.24c.05.16.17.37.45.7.3.35.7.76 1.31 1.37l4.21 4.2c.6.61 1.02 1.02 1.37 1.32.33.28.54.4.7.45q.3.1.62.1v2q-.63 0-1.24-.2-.75-.27-1.38-.83-.62-.54-1.48-1.42l-4.21-4.2c-.59-.6-1.07-1.07-1.42-1.5q-.57-.62-.83-1.37c-.26-.8-.26-1.67 0-2.48q.26-.75.83-1.38.53-.62 1.42-1.48l4.2-4.21c.6-.59 1.07-1.07 1.5-1.42q.62-.57 1.37-.83.6-.2 1.24-.2z" />
    </IconBase>
  ))
);

DiamondBoldDuotone.displayName = 'DiamondBoldDuotone';

// Triple export pattern
export { DiamondBoldDuotone, DiamondBoldDuotone as DiamondBoldDuotoneIcon, DiamondBoldDuotone as SiDiamondBoldDuotone };
export default DiamondBoldDuotone;
export type { DiamondBoldDuotoneProps };
