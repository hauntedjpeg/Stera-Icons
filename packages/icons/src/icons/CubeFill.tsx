import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeFillProps = Omit<IconBaseProps, 'children'>;

const CubeFill = memo(
  forwardRef<SVGSVGElement, CubeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.22 1.64q.78-.15 1.56 0c.61.12 1.17.44 1.98.89l4.2 2.33c.84.47 1.44.8 1.89 1.28q.57.62.83 1.41c.2.62.2 1.3.2 2.27v4.36c0 .96 0 1.65-.2 2.27q-.27.79-.83 1.41c-.45.48-1.05.8-1.9 1.28l-4.2 2.33c-.8.44-1.36.77-1.97.9q-.78.15-1.56 0c-.61-.13-1.17-.46-1.98-.9l-4.2-2.33c-.84-.47-1.44-.8-1.89-1.28q-.56-.61-.83-1.41c-.2-.62-.2-1.3-.2-2.27V9.82c0-.96 0-1.65.2-2.27q.26-.79.83-1.41c.45-.48 1.05-.8 1.9-1.28l4.2-2.33c.8-.45 1.36-.77 1.97-.9m1.65 10.87v7.98c.23-.1.54-.28 1.04-.55l4.2-2.33c.95-.53 1.24-.7 1.45-.94q.3-.33.46-.77c.1-.3.1-.64.1-1.72V9.82a16 16 0 0 0-.03-1.32zm-.44-9.16a2 2 0 0 0-.86 0 6 6 0 0 0-1.48.7L5.9 6.4l-1.06.62L12 11 19.17 7c-.22-.14-.54-.33-1.06-.62l-4.2-2.33a6 6 0 0 0-1.48-.71" clipRule="evenodd" />
    </IconBase>
  ))
);

CubeFill.displayName = 'CubeFill';

// Triple export pattern (lucide-react style)
export { CubeFill, CubeFill as CubeFillIcon, CubeFill as SiCubeFill };
export default CubeFill;
export type { CubeFillProps };
