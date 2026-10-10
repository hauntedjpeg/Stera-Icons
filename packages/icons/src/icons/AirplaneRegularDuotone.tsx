import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegularDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.17 13.27q-.21.2-.22.53c0 .41.34.75.75.75h.38l-3.73 5.15c-.48.66-1.25 1.05-2.07 1.05h-1.1l-.15-.01c-.78-.1-1.27-.93-.94-1.67l1.98-4.56 1.1.04c.36.01.67-.23.76-.57l-.04.12-2.24 5.15h.63c.34 0 .65-.16.85-.43l3.96-5.46zM9.28 3.25c.82 0 1.59.4 2.07 1.05l3.73 5.15h-.38c-.41 0-.75.34-.75.75q0 .31.21.52l-.07-.08-3.96-5.46c-.2-.27-.51-.43-.85-.43h-.63l2.24 5.15.04.12c-.09-.34-.4-.58-.76-.57l-1.1.04L7.1 4.93c-.35-.8.23-1.68 1.1-1.68z" opacity={0.4} />
        <path d="M10.95 13.82c-.01.42-.36.74-.78.73l-3.59-.12-.8 1.42c-.34.59-.96.95-1.64.95H3.5c-.71 0-1.27-.62-1.19-1.33L2.7 12 2.3 8.53c-.08-.71.48-1.33 1.2-1.33h.63c.68 0 1.3.36 1.64.95l.8 1.42 3.6-.12c.4-.01.76.31.77.73.01.4-.31.76-.73.77l-4.05.13c-.27.01-.54-.13-.67-.38L4.47 8.9q-.12-.19-.33-.2h-.3l.36 3.22v.17l-.36 3.22h.3q.22 0 .33-.2l1.03-1.8c.13-.25.4-.4.67-.38l4.05.13c.42.01.74.36.73.77m7.13-.77c.52 0 1.01-.2 1.38-.57l.48-.48-.48-.48c-.37-.37-.86-.57-1.38-.57H14.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.38c.92 0 1.8.36 2.44 1.01l1.01 1.01.1.11q.12.2.12.42 0 .31-.22.53l-1.01 1.01c-.65.65-1.52 1-2.44 1l-3.38.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

AirplaneRegularDuotone.displayName = 'AirplaneRegularDuotone';

// Triple export pattern
export { AirplaneRegularDuotone, AirplaneRegularDuotone as AirplaneRegularDuotoneIcon, AirplaneRegularDuotone as SiAirplaneRegularDuotone };
export default AirplaneRegularDuotone;
export type { AirplaneRegularDuotoneProps };
