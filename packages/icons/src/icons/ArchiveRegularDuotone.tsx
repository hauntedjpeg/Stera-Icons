import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.75 15.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.37q.1.08.23.13c.28.15.58.2.87.23l.4.02v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V9.75l.4-.02q.45-.03.87-.23l.23-.13z" opacity={.4} />
        <path d="M14 12.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M18.6 3.25q.6 0 1.05.02t.87.23q.65.33.98.98.2.43.23.87t.02 1.05v.2q0 .6-.02 1.05t-.23.87q-.33.65-.98.98c-.28.15-.58.2-.87.23q-.44.03-1.05.02H5.4q-.6 0-1.05-.02t-.87-.23q-.65-.33-.98-.98-.2-.43-.23-.87T2.25 6.6v-.2q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zM5.4 4.75c-.43 0-.71 0-.92.02-.2.01-.28.04-.32.06q-.22.11-.33.33c-.02.04-.05.11-.06.32q-.03.29-.02.92v.2c0 .43 0 .71.02.92.01.2.04.28.06.32q.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h13.2q.63 0 .92-.02.28-.02.32-.06.22-.11.33-.33c.02-.04.05-.11.06-.32q.03-.29.02-.92v-.2q0-.62-.02-.92-.02-.28-.06-.32-.11-.22-.33-.33c-.04-.02-.11-.05-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveRegularDuotone.displayName = 'ArchiveRegularDuotone';

// Triple export pattern
export { ArchiveRegularDuotone, ArchiveRegularDuotone as ArchiveRegularDuotoneIcon, ArchiveRegularDuotone as SiArchiveRegularDuotone };
export default ArchiveRegularDuotone;
export type { ArchiveRegularDuotoneProps };
