import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.5 8.64-1.54.86L7.5 5.36l1.54-.86z" opacity={.4} />
        <path fillRule="evenodd" d="M11.24 1.76q.76-.15 1.52 0c.59.12 1.13.43 1.94.88l4.2 2.33c.85.48 1.43.79 1.86 1.25q.54.6.8 1.37c.2.6.19 1.26.19 2.23v4.36c0 .97 0 1.63-.19 2.23q-.26.76-.8 1.37c-.43.46-1.01.77-1.86 1.25l-4.2 2.33c-.81.45-1.35.76-1.94.88q-.76.15-1.52 0c-.59-.12-1.13-.43-1.94-.88l-4.2-2.33c-.85-.48-1.43-.79-1.86-1.25q-.54-.6-.8-1.37c-.2-.6-.19-1.26-.19-2.23V9.82c0-.97 0-1.63.19-2.23q.26-.76.8-1.37c.43-.46 1.01-.77 1.86-1.25l4.2-2.33c.81-.45 1.35-.76 1.94-.88M3.8 8.3c-.04.3-.05.7-.05 1.52v4.36c0 1.07 0 1.44.11 1.76q.16.45.49.82c.22.24.54.43 1.48.96l4.2 2.33c.63.35.97.53 1.22.63v-8.24zm8.95 4.14v8.24c.25-.1.6-.28 1.22-.63l4.2-2.33a6 6 0 0 0 1.48-.96q.34-.36.49-.82c.1-.32.11-.69.11-1.76V9.82c0-.82 0-1.23-.05-1.52zm-.3-9.21q-.45-.09-.9 0c-.31.06-.62.22-1.52.72l-4.2 2.33c-.66.37-1.01.57-1.24.74L12 11.14l7.41-4.12c-.23-.17-.58-.37-1.24-.74l-4.2-2.33c-.9-.5-1.2-.66-1.52-.72" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleRegularDuotone.displayName = 'CubePackageSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleRegularDuotone, CubePackageSimpleRegularDuotone as CubePackageSimpleRegularDuotoneIcon, CubePackageSimpleRegularDuotone as SiCubePackageSimpleRegularDuotone };
export default CubePackageSimpleRegularDuotone;
export type { CubePackageSimpleRegularDuotoneProps };
