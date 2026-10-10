import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.6 4.88.91.01c.2.02.26.04.27.05q.18.1.28.28c0 .01.03.07.05.27l.02.91v.2c0 .43 0 .7-.02.91-.02.2-.04.26-.05.27q-.1.19-.28.28c-.01 0-.07.03-.27.05l-.91.02H5.4c-.43 0-.7 0-.91-.02-.2-.02-.26-.04-.27-.05q-.19-.1-.28-.28c0-.01-.03-.07-.05-.27l-.02-.91v-.2c0-.43 0-.7.02-.91.02-.2.04-.26.05-.27q.1-.18.28-.28c.01 0 .07-.03.27-.05l.91-.01z" opacity={.4} />
        <path fillRule="evenodd" d="M18.6 3.13q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04.2.46.23.92.03.45.02 1.06v.2q0 .6-.02 1.06-.02.45-.23.92-.27.52-.75.85v5.77q.01 1.24-.04 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V9.43q-.48-.33-.75-.85-.2-.46-.23-.92-.03-.45-.02-1.06v-.2q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02zm-8.6 9c-.48 0-.87.39-.87.87s.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM5.4 4.87c-.43 0-.7 0-.91.02-.2.02-.26.04-.27.05q-.19.1-.28.28c0 .01-.03.07-.05.27l-.02.91v.2c0 .43 0 .7.02.91.02.2.04.26.05.27q.1.19.28.28c.01 0 .07.03.27.05l.91.02h13.2c.43 0 .7 0 .91-.02.2-.02.26-.04.27-.05q.18-.1.28-.28c0-.01.03-.07.05-.27l.02-.91v-.2c0-.43 0-.7-.02-.91-.02-.2-.04-.26-.05-.27q-.1-.18-.28-.28c-.01 0-.07-.03-.27-.05l-.91-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveFillDuotone.displayName = 'ArchiveFillDuotone';

// Triple export pattern
export { ArchiveFillDuotone, ArchiveFillDuotone as ArchiveFillDuotoneIcon, ArchiveFillDuotone as SiArchiveFillDuotone };
export default ArchiveFillDuotone;
export type { ArchiveFillDuotoneProps };
