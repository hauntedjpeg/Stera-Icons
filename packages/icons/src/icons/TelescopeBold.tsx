import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeBoldProps = Omit<IconBaseProps, 'children'>;

const TelescopeBold = memo(
  forwardRef<SVGSVGElement, TelescopeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.44-1.59 2.76l-1.69.45c-.87.23-1.74.06-2.43-.4l-1.6.3q.07.3.07.63c0 .8-.32 1.54-.84 2.08l2.73 5.47c.25.5.05 1.1-.44 1.34-.5.25-1.1.05-1.34-.44L12.38 16h-.76l-2.73 5.45c-.24.5-.84.7-1.34.44-.5-.24-.7-.84-.44-1.34l2.73-5.47q-.64-.67-.8-1.6l-4.02.74c-1.16.22-2.29-.49-2.6-1.63L2 10.97c-.3-1.14.32-2.32 1.43-2.7l11.04-3.9c.38-.74 1.05-1.33 1.91-1.56zM12 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-7.92-1.85c-.12.04-.19.17-.16.3l.44 1.63q.08.2.29.18l1.74-.33-.63-2.37zm3.57-1.26.71 2.67 1.13-.2C10.03 10.53 10.95 10 12 10q.99.01 1.74.56l1.52-.29-.99-3.7zm10.93-4.6-1.69.45c-.53.15-.85.7-.7 1.23l1.03 3.86c.14.53.69.85 1.22.7l1.7-.44c.13-.04.2-.18.17-.31l-1.42-5.31c-.04-.14-.18-.22-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeBold.displayName = 'TelescopeBold';

// Triple export pattern
export { TelescopeBold, TelescopeBold as TelescopeBoldIcon, TelescopeBold as SiTelescopeBold };
export default TelescopeBold;
export type { TelescopeBoldProps };
