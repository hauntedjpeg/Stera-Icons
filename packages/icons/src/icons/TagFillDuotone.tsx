import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TagFillDuotone = memo(
  forwardRef<SVGSVGElement, TagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11.66 2.88c.44 0 .8-.01 1.16.07q.45.11.83.35c.31.19.57.45.89.77l4.43 4.44q.88.86 1.42 1.47c.36.43.64.85.8 1.34.26.78.26 1.62 0 2.4-.16.5-.44.91-.8 1.34l-.62.67-.8.8-2.44 2.44q-.86.88-1.47 1.42c-.43.36-.85.64-1.34.8-.78.26-1.62.26-2.4 0-.5-.16-.91-.44-1.34-.8q-.6-.54-1.47-1.42l-4.44-4.43c-.32-.32-.58-.57-.77-.89a3 3 0 0 1-.35-.83c-.08-.35-.07-.72-.07-1.16V6.95q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.04 1.38-.03zM8.5 6.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 6.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

TagFillDuotone.displayName = 'TagFillDuotone';

// Triple export pattern (lucide-react style)
export { TagFillDuotone, TagFillDuotone as TagFillDuotoneIcon, TagFillDuotone as SiTagFillDuotone };
export default TagFillDuotone;
export type { TagFillDuotoneProps };
