import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 12.51v7.98c-.23-.1-.54-.28-1.04-.55l-4.2-2.33a6 6 0 0 1-1.45-.94q-.3-.33-.46-.77c-.1-.3-.1-.64-.1-1.72V9.82c0-.66 0-1.05.02-1.32zM20.1 8.5c.02.27.02.66.02 1.32v4.36c0 1.08 0 1.43-.1 1.72q-.15.44-.46.77c-.2.23-.5.4-1.45.94l-4.2 2.33c-.5.27-.8.44-1.04.55V12.5zM14.7 9.5 12 11 4.83 7c.22-.14.54-.33 1.06-.62L7.5 5.5zM11.57 3.35q.43-.09.86 0a6 6 0 0 1 1.48.7l4.2 2.34 1.06.62L16.5 8.5l-7.2-4 .8-.44a6 6 0 0 1 1.47-.71" opacity={0.4} />
        <path fillRule="evenodd" d="M11.22 1.64q.78-.15 1.56 0c.61.12 1.17.44 1.98.89l4.2 2.33c.84.47 1.44.8 1.89 1.28q.57.62.83 1.41c.2.62.2 1.3.2 2.27v4.36c0 .96 0 1.65-.2 2.27q-.27.79-.83 1.41c-.45.48-1.05.8-1.9 1.28l-4.2 2.33c-.8.44-1.36.77-1.97.9q-.78.15-1.56 0c-.61-.13-1.17-.46-1.98-.9l-4.2-2.33c-.84-.47-1.44-.8-1.89-1.28q-.56-.61-.83-1.41c-.2-.62-.2-1.3-.2-2.27V9.82c0-.96 0-1.65.2-2.27q.26-.79.83-1.41c.45-.48 1.05-.8 1.9-1.28l4.2-2.33c.8-.45 1.36-.77 1.97-.9M3.9 8.5c-.02.27-.02.66-.02 1.32v4.36c0 1.08 0 1.43.1 1.72q.15.44.46.77c.2.23.5.4 1.45.94l4.2 2.33c.5.27.8.44 1.04.55V12.5zm8.98 4.01v7.98c.22-.1.53-.28 1.03-.55l4.2-2.33c.95-.53 1.24-.7 1.45-.94q.3-.33.46-.77c.1-.3.1-.64.1-1.72V9.82a16 16 0 0 0-.03-1.32zM5.89 6.4l-1.06.62L12 11l2.7-1.5-7.2-4zm6.54-3.04a2 2 0 0 0-.86 0 6 6 0 0 0-1.48.7l-.79.45 7.2 4L19.17 7c-.22-.14-.54-.33-1.06-.62l-4.2-2.33a6 6 0 0 0-1.48-.71" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleFillDuotone.displayName = 'CubePackageSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleFillDuotone, CubePackageSimpleFillDuotone as CubePackageSimpleFillDuotoneIcon, CubePackageSimpleFillDuotone as SiCubePackageSimpleFillDuotone };
export default CubePackageSimpleFillDuotone;
export type { CubePackageSimpleFillDuotoneProps };
