import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRectangleFillProps = Omit<IconBaseProps, 'children'>;

const PlayRectangleFill = memo(
  forwardRef<SVGSVGElement, PlayRectangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.1 3.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v2.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H8.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.05-2.7v-2.2q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.66 4.24a1 1 0 0 0-.74.4c-.2.26-.2.75-.2 1.72V14c0 .97 0 1.46.2 1.72a1 1 0 0 0 .74.4c.34.02.74-.25 1.55-.79l3.01-2c.67-.45 1-.68 1.12-.96a1 1 0 0 0 0-.76c-.12-.28-.45-.5-1.12-.95L12 8.66c-.81-.54-1.21-.81-1.55-.79" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayRectangleFill.displayName = 'PlayRectangleFill';

// Triple export pattern (lucide-react style)
export { PlayRectangleFill, PlayRectangleFill as PlayRectangleFillIcon, PlayRectangleFill as SiPlayRectangleFill };
export default PlayRectangleFill;
export type { PlayRectangleFillProps };
