import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolsBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToolsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.84 13.2 4.4 17.63c-.55.54-.55 1.42 0 1.96.54.55 1.42.55 1.96 0l4.43-4.43.9.91q-.07.52-.04 1.06L7.78 21C6.46 22.33 4.32 22.33 3 21c-1.32-1.32-1.32-3.47 0-4.8l3.88-3.87q.52.03 1.06-.04zM19.64 2.14c.4-.23.9-.17 1.22.15l.85.85c.32.32.38.83.15 1.22l-1.27 2.1q-.26.42-.73.49c-.3.03-.61-.07-.83-.29l-.14-.14-4 4-1.41-1.41 4-4-.14-.14c-.22-.21-.32-.52-.29-.83s.22-.57.48-.73z" opacity={0.4} />
        <path fillRule="evenodd" d="M5.84 2.18c1.72-.46 3.64-.02 5 1.34 1.2 1.2 1.68 2.85 1.46 4.4l3.77 3.78c1.56-.22 3.21.26 4.41 1.46 1.36 1.36 1.8 3.28 1.34 5-.09.35-.36.62-.7.71-.35.1-.72 0-.97-.26L19 17.46h-1.53v1.53l1.15 1.16c.25.25.35.62.26.97-.1.34-.36.61-.7.7-1.73.46-3.65.02-5-1.34-1.2-1.2-1.7-2.85-1.47-4.4L7.93 12.3c-1.56.22-3.21-.26-4.41-1.46-1.36-1.36-1.8-3.28-1.34-5l.04-.13q.2-.44.66-.58c.35-.1.72 0 .97.26L5 6.55h1.54V5L5.39 3.85c-.25-.25-.35-.62-.26-.97.1-.34.36-.61.7-.7m2.66 2.1q.04.15.05.31v2.96c0 .55-.45 1-1 1H4.59q-.15 0-.3-.05.23.5.64.92c.83.83 2 1.1 3.07.82l.13-.02c.3-.04.61.06.83.28l4.54 4.54c.25.25.35.62.26.96-.29 1.06-.01 2.24.82 3.07q.42.41.92.64-.04-.15-.04-.3v-2.95c0-.56.44-1 1-1h3.05q.1 0 .2.04-.23-.5-.64-.92c-.83-.83-2-1.1-3.07-.82-.34.09-.71-.01-.96-.26L10.5 8.96c-.25-.25-.35-.62-.26-.96.29-1.06.01-2.24-.82-3.07q-.41-.41-.92-.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolsBoldDuotone.displayName = 'ToolsBoldDuotone';

// Triple export pattern
export { ToolsBoldDuotone, ToolsBoldDuotone as ToolsBoldDuotoneIcon, ToolsBoldDuotone as SiToolsBoldDuotone };
export default ToolsBoldDuotone;
export type { ToolsBoldDuotoneProps };
