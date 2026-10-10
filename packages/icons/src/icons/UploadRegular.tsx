import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadRegularProps = Omit<IconBaseProps, 'children'>;

const UploadRegular = memo(
  forwardRef<SVGSVGElement, UploadRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.75c.41 0 .75.34.75.75v.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.3q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-.2c0-.41.34-.75.75-.75s.75.34.75.75v.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h7.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-.2c0-.41.34-.75.75-.75" />
        <path d="M12 2.75q.31 0 .53.22l5.5 5.5c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4.22-4.22V15.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.31L7.03 9.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l5.5-5.5.11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

UploadRegular.displayName = 'UploadRegular';

// Triple export pattern
export { UploadRegular, UploadRegular as UploadRegularIcon, UploadRegular as SiUploadRegular };
export default UploadRegular;
export type { UploadRegularProps };
