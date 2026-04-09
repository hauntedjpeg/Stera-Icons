import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleFill = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-simple-fill" {...props}>
      <path fillRule="evenodd" d="M11.22 1.64q.78-.15 1.56 0c.61.12 1.17.44 1.98.89l4.2 2.33c.84.47 1.44.8 1.89 1.28q.57.62.83 1.41c.2.62.2 1.3.2 2.27v4.36c0 .96 0 1.65-.2 2.27q-.27.79-.83 1.41c-.45.48-1.05.8-1.9 1.28l-4.2 2.33c-.8.44-1.36.77-1.97.9q-.78.15-1.56 0c-.61-.13-1.17-.46-1.98-.9l-4.2-2.33c-.84-.47-1.44-.8-1.89-1.28q-.56-.61-.83-1.41c-.2-.62-.2-1.3-.2-2.27V9.82c0-.96 0-1.65.2-2.27q.26-.79.83-1.41c.45-.48 1.05-.8 1.9-1.28l4.2-2.33c.8-.45 1.36-.77 1.97-.9m1.66 10.87v7.98c.22-.1.53-.28 1.03-.55l4.2-2.33c.95-.53 1.24-.7 1.45-.94q.3-.33.46-.77c.1-.3.1-.64.1-1.72V9.82a16 16 0 0 0-.03-1.32zM5.89 6.4l-1.06.62L12 11l2.7-1.5-7.2-4zm6.54-3.04a2 2 0 0 0-.86 0 6 6 0 0 0-1.48.7l-.79.45 7.2 4L19.17 7c-.22-.14-.54-.33-1.06-.62l-4.2-2.33a6 6 0 0 0-1.48-.71" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleFill.displayName = 'CubePackageSimpleFill';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleFill, CubePackageSimpleFill as CubePackageSimpleFillIcon, CubePackageSimpleFill as SiCubePackageSimpleFill };
export default CubePackageSimpleFill;
export type { CubePackageSimpleFillProps };
