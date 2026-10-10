import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeFillDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.51 11.9.04.13-1.88.35c-.19.04-.38-.08-.43-.27l-.44-1.63q-.04-.2.1-.36.06-.05.14-.09l1.8-.63zM15.37 10.18l.04.15.01.04-1.71.32q-.61-.46-1.4-.55l-.24-.01H12q-.6 0-1.11.22l-.19.09q-.7.36-1.13 1.02l-1.3.25-.77-2.9 6.86-2.41zM18.55 4.17c.2-.05.4.06.46.26l1.42 5.32c.05.18-.04.36-.2.43l-.06.03-1.7.45-.2.03q-.18.01-.35-.02c-.39-.1-.71-.4-.82-.8L16.06 6c-.13-.49.08-.99.49-1.24l.15-.08.07-.03.09-.03z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.1 2.48c1.13-.3 2.3.37 2.6 1.5l1.42 5.31c.3 1.14-.37 2.3-1.5 2.6l-1.7.46c-.84.23-1.7.05-2.37-.41l-1.77.33q.1.35.1.73c0 .8-.34 1.53-.87 2.06l2.77 5.55c.22.43.04.96-.39 1.17-.43.22-.96.04-1.17-.39l-2.78-5.55q-.21.03-.44.04-.23 0-.44-.04l-2.78 5.55c-.21.43-.74.6-1.17.4-.43-.22-.6-.75-.4-1.18L10 15.06c-.46-.45-.77-1.06-.85-1.74L5 14.1c-1.09.2-2.15-.46-2.44-1.54l-.44-1.63c-.28-1.07.3-2.18 1.35-2.55l2.7-.95 8.4-2.95c.34-.74 1-1.32 1.85-1.55zm-6.6 9.51c-.37.19-.62.57-.63 1.01v.1c.04.4.28.73.63.9q.23.13.5.13t.5-.12c.37-.19.62-.57.62-1q0-.18-.04-.33c-.13-.44-.52-.76-.99-.8zm-7.46-1.96c-.18.07-.29.26-.24.45l.44 1.63c.05.19.24.3.43.27l1.88-.35-.7-2.63zM7.5 8.81l.77 2.9 1.3-.25q.43-.66 1.13-1.02l.19-.1q.52-.21 1.11-.21h.07l.24.01q.79.1 1.4.55l1.71-.32-.05-.2-1.01-3.77zm11.05-4.64-1.7.45c-.6.16-.95.78-.79 1.38l1.04 3.86c.16.6.78.96 1.38.8l1.69-.45c.2-.06.31-.26.26-.46l-1.42-5.32c-.06-.2-.26-.31-.46-.26" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFillDuotone.displayName = 'TelescopeFillDuotone';

// Triple export pattern
export { TelescopeFillDuotone, TelescopeFillDuotone as TelescopeFillDuotoneIcon, TelescopeFillDuotone as SiTelescopeFillDuotone };
export default TelescopeFillDuotone;
export type { TelescopeFillDuotoneProps };
