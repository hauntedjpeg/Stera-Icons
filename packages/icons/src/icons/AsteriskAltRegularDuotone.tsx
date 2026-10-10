import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 12.87.78.48q.12 2.92.78 5.85l.19.8c.12.46-.06.9-.4 1.24-.33.33-.83.51-1.35.51s-1.02-.18-1.36-.51-.5-.78-.4-1.24q.12-.4.2-.8.66-2.93.78-5.85zM4.68 6.2c.45-.12.92-.05 1.27.28l.6.57q2.2 2.03 4.67 3.6l.02.91-.8.44q-2.6-1.35-5.46-2.25l-.78-.23c-.46-.14-.76-.5-.88-.96s-.03-.98.24-1.44q.41-.7 1.12-.91M18.05 6.48c.35-.33.82-.4 1.27-.27s.86.46 1.12.91c.27.46.35.98.24 1.44-.12.45-.42.82-.88.96l-.78.23q-2.87.9-5.46 2.25l-.8-.44q0-.45.02-.91 2.47-1.57 4.68-3.6z" opacity={0.4} />
        <path d="M12 2.25c.52 0 1.02.18 1.36.51.33.33.5.78.39 1.24l-.2.8q-.75 3.37-.8 6.76 2.96 1.65 6.27 2.69l.78.23c.46.14.76.5.88.96s.03.98-.24 1.44c-.26.45-.67.78-1.12.91s-.92.06-1.27-.27l-.6-.57Q14.92 14.6 12 12.87q-2.91 1.74-5.46 4.08l-.6.57c-.34.33-.8.4-1.26.27s-.86-.46-1.12-.91c-.27-.46-.35-.98-.24-1.44.12-.45.42-.82.88-.96l.78-.23q3.31-1.04 6.26-2.69-.05-3.37-.8-6.76-.09-.4-.2-.8c-.1-.46.06-.9.4-1.24s.84-.51 1.36-.51" />
    </IconBase>
  ))
);

AsteriskAltRegularDuotone.displayName = 'AsteriskAltRegularDuotone';

// Triple export pattern
export { AsteriskAltRegularDuotone, AsteriskAltRegularDuotone as AsteriskAltRegularDuotoneIcon, AsteriskAltRegularDuotone as SiAsteriskAltRegularDuotone };
export default AsteriskAltRegularDuotone;
export type { AsteriskAltRegularDuotoneProps };
