import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptAltRegularProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltRegular = memo(
  forwardRef<SVGSVGElement, ReceiptAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M19 2.25h.11l.09.03.06.02q.04 0 .08.03l.05.03.06.05.07.05.02.02.06.07.01.02.02.02.05.1.03.08.02.06.02.12v18.12l-.02.1q0 .05-.03.08l-.02.06q-.04.09-.1.16-.05.08-.14.13l-.05.04-.07.03-.07.03-.07.02-.08.02h-.03l-.07.01h-.07l-.1-.02q-.05 0-.08-.03l-.06-.02-.16-.1-2.03-1.62-2.03 1.63c-.3.23-.73.21-1-.06L11.94 20 9.97 21.6c-.3.23-.73.21-1-.06L7.44 20 5.47 21.6q-.07.05-.16.09l-.06.02-.08.03-.1.02H4.9l-.08-.03q-.04 0-.08-.02l-.06-.03q-.04 0-.07-.03l-.06-.04-.14-.13-.1-.16-.01-.06-.03-.08-.02-.1V2.95l.02-.12.02-.06q0-.05.03-.08l.05-.1.02-.02.01-.02.06-.07.02-.02.06-.05.07-.05.05-.03q.04 0 .08-.03l.06-.02.09-.02h.02L5 2.25h.05l.12.02.06.02q.05 0 .08.03l.1.05.02.02.02.01 2.13 1.62 1.73-1.57c.28-.27.72-.27 1 0L12 3.98l1.68-1.53c.29-.27.73-.27 1.01 0l1.73 1.57 2.13-1.62.02-.01.02-.02.1-.05.08-.03.06-.02.12-.02H19m-6.5 3.3c-.24.23-.61.26-.9.09l-.1-.09L9.8 4.02 8.13 5.55c-.23.22-.57.26-.85.12l-.1-.07L5.74 4.5v14.93l1.28-1.03.12-.07c.29-.15.64-.1.88.13l1.52 1.52 1.98-1.58.12-.07c.29-.15.64-.1.88.13l1.52 1.52 1.98-1.58.1-.07c.27-.14.6-.12.84.07l1.28 1.03V4.5L16.83 5.6c-.25.19-.6.2-.85.03l-.11-.08-1.68-1.53z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptAltRegular.displayName = 'ReceiptAltRegular';

// Triple export pattern
export { ReceiptAltRegular, ReceiptAltRegular as ReceiptAltRegularIcon, ReceiptAltRegular as SiReceiptAltRegular };
export default ReceiptAltRegular;
export type { ReceiptAltRegularProps };
