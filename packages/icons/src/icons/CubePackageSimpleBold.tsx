import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleBold = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.2 1.51a4 4 0 0 1 1.6 0c.64.13 1.22.47 2.02.91l4.2 2.33c.83.47 1.46.8 1.92 1.3a4 4 0 0 1 .86 1.46c.21.65.2 1.36.2 2.31v4.36c0 .95.01 1.66-.2 2.3a4 4 0 0 1-.86 1.47c-.46.5-1.09.83-1.92 1.3l-4.2 2.33c-.8.44-1.38.78-2.01.9a4 4 0 0 1-1.62 0c-.63-.12-1.21-.46-2-.9l-4.2-2.33c-.85-.47-1.47-.8-1.93-1.3a4 4 0 0 1-.86-1.46C2 15.84 2 15.13 2 14.18V9.82c0-.95-.01-1.66.2-2.3a4 4 0 0 1 .86-1.47c.46-.5 1.08-.83 1.92-1.3l4.2-2.33c.8-.44 1.38-.78 2.01-.9M4 8.71 4 9.82v4.36c0 1.1.01 1.41.1 1.68a2 2 0 0 0 .43.73 6 6 0 0 0 1.42.9l4.2 2.34.85.46v-7.7zM13 12.59v7.7l.85-.46 4.2-2.33a6 6 0 0 0 1.42-.91 2 2 0 0 0 .43-.73c.09-.27.1-.59.1-1.68V9.82c0-.52 0-.86-.02-1.11zM5.95 6.5l-.88.5L12 10.87l2.44-1.36L7.5 5.64zm6.45-3.03a2 2 0 0 0-.8 0c-.27.06-.54.2-1.45.7l-.6.33 6.95 3.86L18.93 7q-.3-.19-.88-.5l-4.2-2.34c-.91-.5-1.18-.64-1.45-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleBold.displayName = 'CubePackageSimpleBold';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleBold, CubePackageSimpleBold as CubePackageSimpleBoldIcon, CubePackageSimpleBold as SiCubePackageSimpleBold };
export default CubePackageSimpleBold;
export type { CubePackageSimpleBoldProps };
