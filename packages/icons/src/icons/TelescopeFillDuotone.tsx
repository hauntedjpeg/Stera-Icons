import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeFillDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.51 11.9.04.13-1.88.35a.4.4 0 0 1-.43-.27l-.44-1.63a.4.4 0 0 1 .1-.36l.14-.09 1.8-.63zM15.37 10.18l.04.15.01.04-1.71.32q-.61-.46-1.4-.55l-.24-.01H12q-.6 0-1.11.22l-.19.09q-.7.36-1.13 1.02l-1.3.25-.77-2.9 6.86-2.41zM18.55 4.17c.2-.05.4.06.46.26l1.42 5.32a.37.37 0 0 1-.26.46l-1.7.45a1.13 1.13 0 0 1-1.37-.8L16.06 6a1.13 1.13 0 0 1 .8-1.38z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.1 2.48c1.13-.3 2.3.37 2.6 1.5l1.42 5.31c.3 1.14-.37 2.3-1.5 2.6l-1.7.46c-.84.23-1.7.05-2.37-.41l-1.77.33a2.9 2.9 0 0 1-.77 2.79l2.77 5.55a.88.88 0 0 1-1.56.78l-2.78-5.55a3 3 0 0 1-.88 0l-2.78 5.55a.88.88 0 0 1-1.56-.78l2.77-5.55a3 3 0 0 1-.85-1.74L5 14.1c-1.09.2-2.15-.46-2.44-1.54l-.44-1.63a2.13 2.13 0 0 1 1.35-2.55l2.7-.95 8.4-2.95c.34-.74 1-1.32 1.85-1.55zm-6.6 9.51a1.12 1.12 0 1 0 .6-.1zm-7.46-1.96a.4.4 0 0 0-.24.45l.44 1.63c.05.19.24.3.43.27l1.88-.35-.7-2.63zM7.5 8.81l.77 2.9 1.3-.25q.43-.66 1.13-1.02l.19-.1q.52-.21 1.11-.21h.07l.24.01q.79.1 1.4.55l1.71-.32-.05-.2-1.01-3.77zm11.05-4.64-1.7.45c-.6.16-.95.78-.79 1.38l1.04 3.86c.16.6.78.96 1.38.8l1.69-.45c.2-.06.31-.26.26-.46l-1.42-5.32a.4.4 0 0 0-.46-.26" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFillDuotone.displayName = 'TelescopeFillDuotone';

// Triple export pattern (lucide-react style)
export { TelescopeFillDuotone, TelescopeFillDuotone as TelescopeFillDuotoneIcon, TelescopeFillDuotone as SiTelescopeFillDuotone };
export default TelescopeFillDuotone;
export type { TelescopeFillDuotoneProps };
