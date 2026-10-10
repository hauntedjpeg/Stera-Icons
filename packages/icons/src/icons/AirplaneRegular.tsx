import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneRegularProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegular = memo(
  forwardRef<SVGSVGElement, AirplaneRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.28 3.25c.82 0 1.59.4 2.07 1.05l3.73 5.15h3c.92 0 1.8.36 2.44 1.01l1.01 1.01q.22.22.22.53t-.22.53l-1 1c-.66.65-1.53 1.02-2.45 1.02h-3l-3.73 5.15c-.48.66-1.25 1.05-2.07 1.05h-1.1c-.86 0-1.44-.89-1.1-1.68l2-4.56-2.5-.08-.8 1.42c-.34.59-.96.95-1.64.95H3.5c-.71 0-1.27-.62-1.19-1.33L2.7 12 2.3 8.53c-.08-.71.48-1.33 1.2-1.33h.63c.68 0 1.3.36 1.64.95l.8 1.42 2.5-.08-2-4.56c-.34-.8.24-1.68 1.1-1.68zm1.6 6.65c.1.23.09.5-.05.7-.13.21-.36.34-.6.35l-4.05.14c-.28 0-.55-.14-.68-.39L4.47 8.9q-.12-.19-.33-.2h-.3l.36 3.22v.17l-.36 3.22h.3q.22 0 .33-.2l1.03-1.8c.13-.25.4-.4.68-.39l4.05.14.09.01c.2.03.4.16.51.34.14.2.16.47.06.7l-2.24 5.15h.63c.34 0 .65-.16.85-.43l3.96-5.46q.23-.3.61-.31h3.38c.52 0 1.02-.2 1.38-.57l.48-.48-.48-.48c-.36-.37-.86-.57-1.38-.57H14.7c-.24 0-.47-.11-.6-.3l-3.97-5.47c-.2-.27-.51-.43-.85-.43h-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneRegular.displayName = 'AirplaneRegular';

// Triple export pattern
export { AirplaneRegular, AirplaneRegular as AirplaneRegularIcon, AirplaneRegular as SiAirplaneRegular };
export default AirplaneRegular;
export type { AirplaneRegularProps };
