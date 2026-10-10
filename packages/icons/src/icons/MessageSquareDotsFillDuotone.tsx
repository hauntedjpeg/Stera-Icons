import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDotsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDotsFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDotsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62-.5 1.19-1.44 2.14-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.87q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM7.5 9C6.67 9 6 9.67 6 10.5S6.67 12 7.5 12 9 11.33 9 10.5 8.33 9 7.5 9M12 9c-.83 0-1.5.67-1.5 1.5S11.17 12 12 12s1.5-.67 1.5-1.5S12.83 9 12 9m4.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S17.33 9 16.5 9" clipRule="evenodd" opacity={.4} />
        <path d="M9 10.5c0 .83-.67 1.5-1.5 1.5S6 11.33 6 10.5 6.67 9 7.5 9 9 9.67 9 10.5M13.5 10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 9 12 9s1.5.67 1.5 1.5M18 10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

MessageSquareDotsFillDuotone.displayName = 'MessageSquareDotsFillDuotone';

// Triple export pattern
export { MessageSquareDotsFillDuotone, MessageSquareDotsFillDuotone as MessageSquareDotsFillDuotoneIcon, MessageSquareDotsFillDuotone as SiMessageSquareDotsFillDuotone };
export default MessageSquareDotsFillDuotone;
export type { MessageSquareDotsFillDuotoneProps };
