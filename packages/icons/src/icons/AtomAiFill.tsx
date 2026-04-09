import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomAiFillProps = Omit<IconBaseProps, 'children'>;

const AtomAiFill = memo(
  forwardRef<SVGSVGElement, AtomAiFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-ai-fill" {...props}>
      <path d="M8.39 8.78a1.25 1.25 0 0 1 1.78 1.75 24 24 0 0 0-4.15 5.59 7 7 0 0 0-.75 2.08c-.04.3-.01.46 0 .52.07.02.25.06.65-.01.59-.11 1.4-.42 2.35-.93a1.25 1.25 0 0 1 1.19 2.2 11 11 0 0 1-3.1 1.19c-.9.16-2.05.15-2.86-.67-.76-.76-.82-1.81-.7-2.66.13-.89.5-1.87 1-2.85.99-1.98 2.64-4.23 4.59-6.21" />
        <path d="M8.76 13.85c.49-.5 1.28-.5 1.77-.02a24 24 0 0 0 5.59 4.15q1.29.64 2.08.75c.3.04.46.01.52 0 .02-.07.06-.25-.01-.65q-.16-.9-.93-2.35a1.25 1.25 0 0 1 2.2-1.19 11 11 0 0 1 1.19 3.1c.16.9.15 2.05-.67 2.86-.76.76-1.81.82-2.66.7a10 10 0 0 1-2.85-.99c-1.98-1-4.22-2.65-6.2-4.6-.5-.47-.5-1.27-.03-1.76" />
        <path d="M17.62 2.84c.9-.17 2.06-.16 2.88.66.76.76.82 1.82.7 2.66a10 10 0 0 1-1 2.86c-1 1.98-2.65 4.23-4.6 6.21a1.25 1.25 0 0 1-1.78-1.75 24 24 0 0 0 4.15-5.59 7 7 0 0 0 .75-2.09c.05-.3.02-.46 0-.52a2 2 0 0 0-.64.02q-.92.16-2.37.94a1.25 1.25 0 0 1-1.2-2.2 11 11 0 0 1 3.11-1.2" />
        <path d="M3.5 3.5c.76-.76 1.81-.82 2.66-.7.89.13 1.87.5 2.85 1 1.98.99 4.23 2.64 6.22 4.59a1.25 1.25 0 0 1-1.76 1.78A24 24 0 0 0 7.9 6.02a7 7 0 0 0-2.09-.75 1 1 0 0 0-.52 0c-.02.07-.06.26.01.65q.16.92.95 2.37a1.25 1.25 0 0 1-2.2 1.2 11 11 0 0 1-1.2-3.11c-.17-.9-.16-2.06.66-2.88" />
    </IconBase>
  ))
);

AtomAiFill.displayName = 'AtomAiFill';

// Triple export pattern (lucide-react style)
export { AtomAiFill, AtomAiFill as AtomAiFillIcon, AtomAiFill as SiAtomAiFill };
export default AtomAiFill;
export type { AtomAiFillProps };
