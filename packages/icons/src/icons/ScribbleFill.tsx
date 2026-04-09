import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScribbleFillProps = Omit<IconBaseProps, 'children'>;

const ScribbleFill = memo(
  forwardRef<SVGSVGElement, ScribbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scribble-fill" {...props}>
      <path d="M9.58 1.76a1.3 1.3 0 0 1 1.27.59 1.3 1.3 0 0 1 .18.9c-.03.24-.13.48-.2.65-.17.4-.48 1.05-1.03 2.1L8.23 9a43 43 0 0 1 3.32-2.67q.7-.51 1.17-.78.44-.27.8-.41l.12-.03a1.27 1.27 0 0 1 1.57 1.36c-.01.2-.08.4-.1.47q-.13.34-.33.77c-.27.58-.67 1.38-1.1 2.22-.49 1-1 2.88-1.57 5.5 1.58-1.93 4.05-5.05 5.49-6.84a29 29 0 0 1 1.83-2.12q.3-.31.6-.5c.18-.14.49-.3.88-.32h.15a1.3 1.3 0 0 1 1 .65c.18.3.19.57.19.68q-.01.38-.1.72c-.1.48-.34 1.24-.75 2.46-.83 2.44-2.4 6.68-3.16 9a1.25 1.25 0 0 1 .15 2.03q-.43.36-.88.7l-.19.13c-.06.04-.26.16-.54.2a1.32 1.32 0 0 1-1.53-1.33q0-.46.13-.93l.4-1.36c.52-1.57 1.52-4.34 2.34-6.66-1.38 1.73-3.04 3.81-4.18 5.2q-1.16 1.42-1.79 2.04c-.2.2-.43.42-.68.56-.2.13-.73.4-1.35.17-.61-.23-.83-.76-.9-1.02q-.12-.43-.1-.81.01-.75.25-1.81a53 53 0 0 1 1.61-6.33q-.68.56-1.49 1.29c-.78.7-1.72 1.6-2.4 2.14q-.28.21-.56.4c-.16.1-.4.24-.7.3a1.4 1.4 0 0 1-1.5-.52 1.6 1.6 0 0 1-.24-1.2l.03-.17c.1-.43.3-.94.5-1.42q.38-.9.92-1.97l1.41-2.76a64 64 0 0 0-3.2 2.25 1.25 1.25 0 0 1-1.5-1.99 67 67 0 0 1 5.69-3.82 7 7 0 0 1 1.53-.7z" />
    </IconBase>
  ))
);

ScribbleFill.displayName = 'ScribbleFill';

// Triple export pattern (lucide-react style)
export { ScribbleFill, ScribbleFill as ScribbleFillIcon, ScribbleFill as SiScribbleFill };
export default ScribbleFill;
export type { ScribbleFillProps };
