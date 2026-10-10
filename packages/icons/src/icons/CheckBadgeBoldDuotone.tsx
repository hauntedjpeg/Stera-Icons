import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.88 2.7c1.17-1.16 3.07-1.16 4.24 0l.93.94q.3.28.7.29h1.32c1.66 0 3 1.34 3 3v1.31q0 .41.3.71l.92.93c1.17 1.17 1.17 3.07 0 4.24l-.93.93q-.28.3-.29.7v1.32c0 1.66-1.34 3-3 3h-1.31q-.41 0-.71.3l-.93.92c-1.17 1.17-3.07 1.17-4.24 0l-.93-.93q-.3-.28-.7-.29H6.92c-1.66 0-3-1.34-3-3v-1.31q0-.42-.3-.71l-.92-.93c-1.17-1.17-1.17-3.07 0-4.24l.93-.93q.28-.3.29-.7V6.92c0-1.66 1.34-3 3-3h1.31q.42 0 .71-.3zm2.83 1.42c-.4-.39-1.03-.39-1.42 0l-.93.93c-.56.56-1.32.88-2.12.88H6.93c-.55 0-1 .45-1 1v1.31c0 .8-.32 1.56-.88 2.12l-.93.93c-.39.4-.39 1.03 0 1.42l.93.93c.56.56.88 1.32.88 2.12v1.31c0 .55.45 1 1 1h1.31c.8 0 1.56.32 2.12.88l.93.93c.4.39 1.03.39 1.42 0l.93-.93c.56-.56 1.32-.88 2.12-.88h1.31c.55 0 1-.45 1-1v-1.31c0-.8.32-1.56.88-2.12l.93-.93c.39-.4.39-1.03 0-1.42l-.93-.93c-.56-.56-.88-1.32-.88-2.12V6.93c0-.55-.45-1-1-1h-1.31c-.8 0-1.56-.32-2.12-.88z" clipRule="evenodd" opacity={.4} />
        <path d="M14.79 9.05c.38-.4 1.02-.4 1.41-.01.4.38.4 1.02.01 1.41l-4.27 4.34q-.16.17-.33.32c-.12.1-.3.24-.57.32q-.52.14-1-.06c-.26-.11-.42-.27-.53-.39-.1-.1-.2-.25-.29-.36l-1.51-2c-.34-.43-.26-1.06.18-1.4s1.07-.24 1.4.2l1.38 1.8z" />
    </IconBase>
  ))
);

CheckBadgeBoldDuotone.displayName = 'CheckBadgeBoldDuotone';

// Triple export pattern
export { CheckBadgeBoldDuotone, CheckBadgeBoldDuotone as CheckBadgeBoldDuotoneIcon, CheckBadgeBoldDuotone as SiCheckBadgeBoldDuotone };
export default CheckBadgeBoldDuotone;
export type { CheckBadgeBoldDuotoneProps };
