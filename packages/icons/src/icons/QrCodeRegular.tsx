import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QrCodeRegularProps = Omit<IconBaseProps, 'children'>;

const QrCodeRegular = memo(
  forwardRef<SVGSVGElement, QrCodeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.75 13.25c1.1 0 2 .9 2 2v4.5c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
        <path d="M16.08 20.8c0 .53-.42.95-.94.95h-.95c-.52 0-.94-.42-.94-.94v-.95c0-.52.42-.94.94-.94h1.9zM20.8 18.92c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-.95c-.52 0-.94-.42-.94-.94v-1.9z" />
        <path d="M18.92 18.92h-2.84v-2.84h2.84zM15.14 13.25c.52 0 .94.42.94.94v1.9H14.2c-.52 0-.94-.43-.94-.95v-.95c0-.52.42-.94.94-.94zM20.8 13.25c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-1.9V14.2c0-.52.43-.94.95-.94zM6.5 5.25c.69 0 1.25.56 1.25 1.25S7.19 7.75 6.5 7.75 5.25 7.19 5.25 6.5s.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M8.75 2.25c1.1 0 2 .9 2 2v4.5c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5zM19.75 2.25c1.1 0 2 .9 2 2v4.5c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

QrCodeRegular.displayName = 'QrCodeRegular';

// Triple export pattern
export { QrCodeRegular, QrCodeRegular as QrCodeRegularIcon, QrCodeRegular as SiQrCodeRegular };
export default QrCodeRegular;
export type { QrCodeRegularProps };
