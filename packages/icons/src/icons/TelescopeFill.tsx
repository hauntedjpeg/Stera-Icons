import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeFillProps = Omit<IconBaseProps, 'children'>;

const TelescopeFill = memo(
  forwardRef<SVGSVGElement, TelescopeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.1 2.48c1.13-.3 2.3.37 2.6 1.5l1.42 5.31c.3 1.14-.37 2.3-1.5 2.6l-1.7.46c-.84.23-1.7.05-2.37-.41l-1.77.33q.1.35.1.73c0 .8-.34 1.53-.87 2.06l2.77 5.55c.22.43.04.96-.39 1.17-.43.22-.96.04-1.17-.39l-2.78-5.55q-.21.03-.44.04-.23 0-.44-.04l-2.78 5.55c-.21.43-.74.6-1.17.4-.43-.22-.6-.75-.4-1.18L10 15.06c-.46-.45-.77-1.06-.85-1.74l-1.32.25H7.8L5 14.1c-1.1.2-2.16-.46-2.45-1.54l-.44-1.63c-.28-1.07.3-2.18 1.35-2.55l11.1-3.9c.34-.74 1-1.32 1.85-1.55zm-6.1 9.4c-.62 0-1.13.5-1.13 1.12v.1c.04.4.28.73.63.9q.23.13.5.13t.5-.12c.37-.19.62-.57.62-1q0-.18-.04-.33c-.14-.47-.57-.8-1.08-.8m-7.96-1.85c-.18.07-.29.26-.24.45l.44 1.63c.05.19.24.3.43.27l1.88-.35-.7-2.63zm14.5-5.86-1.68.45c-.6.16-.96.78-.8 1.38l1.04 3.86c.16.6.78.96 1.38.8l1.69-.45c.2-.06.31-.26.26-.46l-1.42-5.32c-.06-.2-.26-.31-.46-.26" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFill.displayName = 'TelescopeFill';

// Triple export pattern
export { TelescopeFill, TelescopeFill as TelescopeFillIcon, TelescopeFill as SiTelescopeFill };
export default TelescopeFill;
export type { TelescopeFillProps };
