import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeFillProps = Omit<IconBaseProps, 'children'>;

const TelescopeFill = memo(
  forwardRef<SVGSVGElement, TelescopeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope-fill" {...props}>
      <path fillRule="evenodd" d="M18.1 2.48c1.13-.3 2.3.37 2.6 1.5l1.42 5.31c.3 1.14-.37 2.3-1.5 2.6l-1.7.46c-.84.23-1.7.05-2.37-.41l-1.77.33a2.9 2.9 0 0 1-.77 2.79l2.77 5.55a.88.88 0 0 1-1.56.78l-2.78-5.55a3 3 0 0 1-.88 0l-2.78 5.55a.88.88 0 0 1-1.56-.78l2.77-5.55a3 3 0 0 1-.85-1.74l-1.32.25H7.8L5 14.1c-1.1.2-2.16-.46-2.45-1.54l-.44-1.63a2.13 2.13 0 0 1 1.35-2.55l11.1-3.9c.34-.74 1-1.32 1.85-1.55zm-6.1 9.4a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25m-7.96-1.85a.4.4 0 0 0-.24.45l.44 1.63c.05.19.24.3.43.27l1.88-.35-.7-2.63zm14.5-5.86-1.68.45c-.6.16-.96.78-.8 1.38l1.04 3.86c.16.6.78.96 1.38.8l1.69-.45c.2-.06.31-.26.26-.46l-1.42-5.32a.4.4 0 0 0-.46-.26" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFill.displayName = 'TelescopeFill';

// Triple export pattern (lucide-react style)
export { TelescopeFill, TelescopeFill as TelescopeFillIcon, TelescopeFill as SiTelescopeFill };
export default TelescopeFill;
export type { TelescopeFillProps };
