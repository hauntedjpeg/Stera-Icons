import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageFillProps = Omit<IconBaseProps, 'children'>;

const CubePackageFill = memo(
  forwardRef<SVGSVGElement, CubePackageFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.22 1.64q.78-.15 1.56 0c.61.12 1.17.44 1.98.89l4.2 2.33c.84.47 1.44.8 1.89 1.28q.57.62.83 1.41c.2.62.2 1.3.2 2.27v4.36c0 .96 0 1.65-.2 2.27q-.27.79-.83 1.41c-.45.48-1.05.8-1.9 1.28l-4.2 2.33c-.8.44-1.36.77-1.97.9q-.78.15-1.56 0c-.61-.13-1.17-.46-1.98-.9l-4.2-2.33c-.84-.47-1.44-.8-1.89-1.28q-.56-.61-.83-1.41c-.2-.62-.2-1.3-.2-2.27V9.82c0-.96 0-1.65.2-2.27q.26-.79.83-1.41c.45-.48 1.05-.8 1.9-1.28l4.2-2.33c.8-.45 1.36-.77 1.97-.9m5.98 8.47c.18.6.18 1.28.18 2.21V13a.88.88 0 0 1-1.75 0v-.68a16 16 0 0 0-.04-1.32l-2.71 1.51v7.98c.22-.1.53-.28 1.03-.55l4.2-2.33c.95-.53 1.24-.7 1.45-.94q.3-.33.46-.77c.1-.3.1-.64.1-1.72V9.82a16 16 0 0 0-.03-1.32zM5.9 6.4c-.53.3-.85.48-1.07.62L12 11l2.67-1.49c-.22-.14-.54-.33-1.06-.62L7.5 5.5zm6.53-3.04a2 2 0 0 0-.86 0 6 6 0 0 0-1.48.7l-.79.45 5.16 2.86c.82.46 1.41.78 1.85 1.24l2.86-1.59c-.22-.14-.54-.33-1.06-.62l-4.2-2.33a6 6 0 0 0-1.48-.71" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageFill.displayName = 'CubePackageFill';

// Triple export pattern (lucide-react style)
export { CubePackageFill, CubePackageFill as CubePackageFillIcon, CubePackageFill as SiCubePackageFill };
export default CubePackageFill;
export type { CubePackageFillProps };
