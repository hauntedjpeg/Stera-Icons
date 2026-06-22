import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyBoldDuotone = memo(
  forwardRef<SVGSVGElement, CopyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.6 2q-1.44-.01-2.38.05c-.65.05-1.22.17-1.76.44a4.5 4.5 0 0 0-1.97 1.97 5 5 0 0 0-.44 1.76Q2 7.16 2 8.6V11c0 1.31-.01 2.22.25 2.99a4.5 4.5 0 0 0 2.76 2.76c.56.2 1.2.24 2 .25L7 15.4V15a4 4 0 0 1-1.33-.14 2.5 2.5 0 0 1-1.53-1.53C4.01 12.97 4 12.48 4 11V8.6c0-1 0-1.68.04-2.22.05-.52.13-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1c.2-.1.5-.18 1.01-.23C6.92 4 7.6 4 8.6 4H11c1.48 0 1.97.01 2.33.14a2.5 2.5 0 0 1 1.53 1.53c.1.27.12.6.13 1.33h.41l1.6.01a6 6 0 0 0-.25-2 4.5 4.5 0 0 0-2.76-2.76C13.22 2 12.3 2 11 2z" opacity={.4} />
        <path fillRule="evenodd" d="M13.6 7q-1.44-.01-2.38.05a5 5 0 0 0-1.76.44 4.5 4.5 0 0 0-1.97 1.97 5 5 0 0 0-.44 1.76Q7 12.16 7 13.6v1.8q-.01 1.44.05 2.38.05.96.44 1.76a4.5 4.5 0 0 0 1.97 1.97 5 5 0 0 0 1.76.44q.94.06 2.38.05h1.8q1.44.01 2.38-.05a5 5 0 0 0 1.76-.44 4.5 4.5 0 0 0 1.97-1.97 5 5 0 0 0 .44-1.76q.06-.94.05-2.38v-1.8q.01-1.44-.05-2.38a5 5 0 0 0-.44-1.76 4.5 4.5 0 0 0-1.97-1.97 5 5 0 0 0-1.76-.44Q16.84 7 15.4 7zm1.8 2c1 0 1.68 0 2.22.04.52.05.8.13 1.01.23q.73.37 1.1 1.1c.1.2.18.5.23 1.01.04.54.04 1.22.04 2.22v1.8c0 1 0 1.68-.04 2.22-.05.52-.13.8-.23 1.01a2.5 2.5 0 0 1-1.1 1.1c-.2.1-.5.18-1.01.23-.54.04-1.22.04-2.22.04h-1.8c-1 0-1.68 0-2.22-.04-.52-.05-.8-.13-1.01-.23a2.5 2.5 0 0 1-1.1-1.1c-.1-.2-.18-.5-.23-1.01C9 17.08 9 16.4 9 15.4v-1.8c0-1 0-1.68.04-2.22.05-.52.13-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1c.2-.1.5-.18 1.01-.23C11.92 9 12.6 9 13.6 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyBoldDuotone.displayName = 'CopyBoldDuotone';

// Triple export pattern (lucide-react style)
export { CopyBoldDuotone, CopyBoldDuotone as CopyBoldDuotoneIcon, CopyBoldDuotone as SiCopyBoldDuotone };
export default CopyBoldDuotone;
export type { CopyBoldDuotoneProps };
