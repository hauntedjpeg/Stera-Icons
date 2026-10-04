import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.04 1.92a5 5 0 0 1 1.92 0c.74.16 1.42.54 2.51 1.15l2.6 1.45c1.16.64 1.89 1.03 2.42 1.61q.35.37.6.8v.01q.26.45.42.92c.25.76.24 1.59.24 2.9v2.47c0 1.32 0 2.15-.24 2.9a5 5 0 0 1-1.02 1.74c-.53.58-1.26.97-2.42 1.61l-2.6 1.45c-1.09.6-1.77 1-2.51 1.15q-.48.1-.96.1c.41 0 .75-.34.75-.76V12a.8.8 0 0 0-.39-.65l-8.44-4.7a.75.75 0 0 0-1 .28q.25-.43.59-.8c.54-.58 1.27-.97 2.42-1.61l2.6-1.45c1.09-.6 1.77-1 2.51-1.15m1.71 10.52v8.14c.43-.1.9-.35 2-.96l2.6-1.45c1.24-.69 1.7-.96 2.04-1.32q.47-.52.7-1.18c.15-.47.16-1.01.16-2.44v-2.46c0-1.4-.01-1.95-.16-2.4zm-.1-9.05a3 3 0 0 0-1.3 0c-.46.1-.92.34-2.1 1l-2.6 1.44a10 10 0 0 0-1.97 1.25L12 11.14l7.32-4.06c-.34-.33-.82-.61-1.98-1.25l-2.6-1.45a8 8 0 0 0-2.08-.99" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M2.92 6.93a.75.75 0 0 1 1-.27l8.44 4.68c.24.14.39.39.39.66v9.42c0 .42-.34.75-.75.75q-.48 0-.96-.1c-.74-.14-1.42-.53-2.51-1.14l-2.6-1.45c-1.16-.64-1.89-1.03-2.42-1.61q-.69-.77-1.02-1.73c-.25-.76-.24-1.59-.24-2.9v-2.47c0-1.32 0-2.15.24-2.9q.15-.5.43-.94m.99 1.43a9 9 0 0 0-.16 2.4v2.47c0 1.43 0 1.97.16 2.44q.23.66.7 1.18c.34.36.8.63 2.05 1.32l2.6 1.45c1.1.6 1.56.85 1.99.96v-8.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubeRegularDuotone.displayName = 'CubeRegularDuotone';

// Triple export pattern (lucide-react style)
export { CubeRegularDuotone, CubeRegularDuotone as CubeRegularDuotoneIcon, CubeRegularDuotone as SiCubeRegularDuotone };
export default CubeRegularDuotone;
export type { CubeRegularDuotoneProps };
