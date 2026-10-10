import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WarehouseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WarehouseBoldDuotone = memo(
  forwardRef<SVGSVGElement, WarehouseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.25 11c1.24 0 2.25 1 2.25 2.25V18h-2v-1.5h-7V18h-2v-4.75c0-1.24 1-2.25 2.25-2.25zm-6.5 2q-.23.02-.25.25v1.25h7v-1.25q-.02-.23-.25-.25z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.4 3.35q.6-.12 1.2 0c.49.1.93.36 1.44.64l5.8 3.22c.54.3 1.01.55 1.37.93q.43.48.64 1.1.16.55.15 1.2v5.36q0 .81-.03 1.4c-.03.39-.1.78-.3 1.16q-.45.87-1.3 1.31c-.39.2-.78.27-1.18.3q-.57.04-1.4.03H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-4.92c0-.61-.01-1.15.15-1.64q.2-.62.64-1.1c.36-.38.83-.63 1.37-.93L9.96 4c.51-.28.95-.54 1.44-.64m.8 1.96q-.2-.04-.4 0c-.12.02-.25.08-.87.43l-5.8 3.22c-.66.37-.78.45-.87.54q-.14.16-.21.36c-.04.12-.05.27-.05 1.02v4.92c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h11.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09q.3-.15.44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-4.92c0-.75-.01-.9-.05-1.02q-.07-.2-.21-.36c-.09-.1-.21-.17-.87-.54l-5.8-3.22c-.63-.35-.75-.4-.87-.43" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseBoldDuotone.displayName = 'WarehouseBoldDuotone';

// Triple export pattern
export { WarehouseBoldDuotone, WarehouseBoldDuotone as WarehouseBoldDuotoneIcon, WarehouseBoldDuotone as SiWarehouseBoldDuotone };
export default WarehouseBoldDuotone;
export type { WarehouseBoldDuotoneProps };
