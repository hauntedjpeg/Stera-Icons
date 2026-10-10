import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FastForwardBoldProps = Omit<IconBaseProps, 'children'>;

const FastForwardBold = memo(
  forwardRef<SVGSVGElement, FastForwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.98 5.77c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83.22.51.22 1.09 0 1.6-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58c-.3.14-.67.29-1.12.25-.56-.06-1.08-.35-1.42-.81-.26-.36-.33-.77-.36-1.08Q12 16.1 12 15.8v-3.33q-.04.16-.11.33c-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58c-.3.14-.67.29-1.12.25-.56-.06-1.08-.35-1.42-.81-.26-.36-.33-.77-.36-1.08q-.04-.49-.03-1.17V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08.34-.46.86-.75 1.42-.8l.17-.01c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83q.07.15.11.34V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08.34-.46.86-.75 1.42-.8zM3.02 7.84c-.02.21-.02.5-.02.99v6.34c0 .49 0 .78.02.99v.03l.04-.01c.18-.1.44-.24.85-.5l5.29-3.17c.4-.23.63-.37.79-.49L10 12l-.02-.02q-.22-.16-.8-.5L3.92 8.32q-.6-.37-.85-.49h-.04zm11 0c-.02.21-.02.5-.02.99v6.94l.02.39v.03l.04-.01c.18-.1.44-.24.85-.5l5.29-3.17c.4-.23.63-.37.79-.49L21 12l-.02-.02c-.16-.12-.4-.26-.8-.5l-5.28-3.17q-.6-.37-.85-.49h-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FastForwardBold.displayName = 'FastForwardBold';

// Triple export pattern
export { FastForwardBold, FastForwardBold as FastForwardBoldIcon, FastForwardBold as SiFastForwardBold };
export default FastForwardBold;
export type { FastForwardBoldProps };
