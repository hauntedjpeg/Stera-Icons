import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageFillDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 12.51v7.9c-.38-.12-.85-.37-1.81-.9l-2.6-1.45c-1.25-.7-1.7-.95-2.02-1.3q-.46-.49-.67-1.13c-.14-.45-.16-.97-.16-2.4v-2.46c0-1.26.01-1.8.11-2.22zM20.02 8.55c.1.41.1.96.1 2.22v2.46c0 1.43 0 1.95-.15 2.4q-.22.63-.67 1.13c-.32.35-.77.6-2.02 1.3l-2.6 1.45c-.96.53-1.43.78-1.8.9v-7.9l2.71-1.5c.03.26.04.65.04 1.31V13a.87.87 0 1 0 1.74 0v-.68c0-.93.01-1.6-.17-2.2zM13.6 8.9c.53.28.85.47 1.07.61L12 11 4.9 7.05c.31-.27.8-.55 1.82-1.11l.78-.44zM11.37 3.51q.63-.12 1.26 0c.44.1.87.32 2.05.98l2.6 1.45c1.02.56 1.5.84 1.82 1.11L16.31 8.6c-.44-.46-1.03-.78-1.85-1.24L9.3 4.5h.02a8 8 0 0 1 2.05-.99" opacity={0.4} />
        <path fillRule="evenodd" d="M11.02 1.8a5 5 0 0 1 1.96 0c.77.16 1.47.56 2.55 1.16l2.6 1.45c1.15.63 1.9 1.04 2.45 1.64q.72.77 1.05 1.77c.26.78.24 1.64.24 2.95v2.46c0 1.31.02 2.17-.24 2.95a5 5 0 0 1-1.05 1.77c-.55.6-1.3 1-2.45 1.64l-2.6 1.45c-1.08.6-1.78 1-2.55 1.16q-.98.2-1.96 0c-.77-.16-1.47-.56-2.55-1.16l-2.6-1.45c-1.15-.63-1.9-1.04-2.46-1.64a5 5 0 0 1-1.04-1.77c-.26-.78-.25-1.64-.25-2.95v-2.46c0-1.31 0-2.17.25-2.95q.33-1 1.04-1.77c.56-.6 1.31-1 2.46-1.64l2.6-1.45c1.08-.6 1.78-1 2.55-1.16M3.98 8.55c-.1.41-.1.97-.1 2.22v2.46c0 1.43 0 1.95.15 2.4q.21.63.67 1.13c.32.35.77.6 2.02 1.3l2.6 1.45c.96.54 1.43.78 1.8.9v-7.9zM17.2 10.1c.18.6.17 1.28.17 2.21V13a.87.87 0 1 1-1.75 0v-.68c0-.66 0-1.05-.03-1.32l-2.72 1.51v7.9c.38-.12.85-.36 1.81-.9l2.6-1.45c1.25-.7 1.7-.95 2.02-1.3q.46-.49.67-1.13c.14-.45.15-.97.15-2.4v-2.46c0-1.26 0-1.8-.1-2.22zM6.72 5.94c-1.02.56-1.5.84-1.82 1.11L12 11l2.67-1.49-1.06-.62L7.5 5.5zm5.91-2.43a3 3 0 0 0-1.26 0c-.44.1-.87.32-2.05.98H9.3l5.16 2.87c.82.46 1.41.78 1.85 1.24l2.8-1.55c-.32-.27-.8-.55-1.83-1.11l-2.6-1.45a8 8 0 0 0-2.05-.98" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageFillDuotone.displayName = 'CubePackageFillDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageFillDuotone, CubePackageFillDuotone as CubePackageFillDuotoneIcon, CubePackageFillDuotone as SiCubePackageFillDuotone };
export default CubePackageFillDuotone;
export type { CubePackageFillDuotoneProps };
