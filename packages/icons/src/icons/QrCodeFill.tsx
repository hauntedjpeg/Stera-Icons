import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QrCodeFillProps = Omit<IconBaseProps, 'children'>;

const QrCodeFill = memo(
  forwardRef<SVGSVGElement, QrCodeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.75 13.13c1.17 0 2.13.95 2.13 2.12v4.5c0 1.17-.96 2.13-2.13 2.13h-4.5c-1.17 0-2.12-.96-2.12-2.13v-4.5c0-1.17.95-2.12 2.12-2.12zm-4.5 1.74c-.2 0-.37.17-.37.38v4.5c0 .2.16.38.37.38h4.5c.2 0 .38-.17.38-.38v-4.5c0-.2-.17-.37-.38-.37z" clipRule="evenodd" />
        <path d="M16.04 20.9c0 .54-.43.98-.97.98h-.97c-.54 0-.97-.44-.97-.98v-.97c0-.54.43-.97.97-.97h1.94zM20.9 18.96c.54 0 .98.43.98.97v.97c0 .54-.44.98-.98.98h-.97c-.54 0-.97-.44-.97-.98v-1.94zM18.96 18.96h-2.92v-2.92h2.92zM15.07 13.13c.54 0 .97.43.97.97v1.94H14.1c-.54 0-.97-.43-.97-.97v-.97c0-.54.43-.97.97-.97z" />
        <path d="M20.9 13.13c.54 0 .98.43.98.97v.97c0 .54-.44.97-.98.97h-1.94V14.1c0-.54.43-.97.97-.97z" />
        <path fillRule="evenodd" d="M8.75 2.13c1.17 0 2.13.95 2.13 2.12v4.5c0 1.17-.96 2.13-2.13 2.13h-4.5c-1.17 0-2.12-.96-2.12-2.13v-4.5c0-1.17.95-2.12 2.12-2.12zM6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8 8 7.33 8 6.5 7.33 5 6.5 5M19.75 2.13c1.17 0 2.13.95 2.13 2.12v4.5c0 1.17-.96 2.13-2.13 2.13h-4.5c-1.17 0-2.12-.96-2.12-2.13v-4.5c0-1.17.95-2.12 2.12-2.12zm-4.5 1.75c-.2 0-.37.16-.37.37v4.5c0 .2.16.38.37.38h4.5c.2 0 .38-.17.38-.38v-4.5c0-.2-.17-.37-.38-.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

QrCodeFill.displayName = 'QrCodeFill';

// Triple export pattern
export { QrCodeFill, QrCodeFill as QrCodeFillIcon, QrCodeFill as SiQrCodeFill };
export default QrCodeFill;
export type { QrCodeFillProps };
