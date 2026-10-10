import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ServerFillProps = Omit<IconBaseProps, 'children'>;

const ServerFill = memo(
  forwardRef<SVGSVGElement, ServerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.3 12.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28-.83-.42-1.25-1.25-.25-.54-.28-1.13-.05-.56-.04-1.38v-.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM7 15.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M17.3 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28-.83-.42-1.25-1.25-.25-.54-.28-1.13-.05-.55-.04-1.38v-.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM7 5.75c-.69 0-1.25.56-1.25 1.25S6.31 8.25 7 8.25 8.25 7.69 8.25 7 7.69 5.75 7 5.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ServerFill.displayName = 'ServerFill';

// Triple export pattern
export { ServerFill, ServerFill as ServerFillIcon, ServerFill as SiServerFill };
export default ServerFill;
export type { ServerFillProps };
